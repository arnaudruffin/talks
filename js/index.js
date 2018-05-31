document.addEventListener('DOMContentLoaded', () => {
  let query = {}
  window.location.search.slice(1).split('&').forEach((search) => {
    [key, value] = search.split('=')
    query[key] = value
  })

  if (query.wide) {
    document.getElementsByTagName('html')[0].classList.add('wide')
  }

  let source = 'index.md'
  if (query.lang || query.format) {
    let modifiers = '.'

    modifiers += query.lang ? `${query.lang}.` : null
    modifiers += query.format ? `${query.format}.` : null

    source = `index${modifiers}md`
  }

  document.documentElement.setAttribute('lang', query.lang || 'fr')
  if (query.format) document.body.classList.add(`format-${query.format}`)

  let canonical
  const links = document.getElementsByTagName('link')
  for (let i = 0, tag; i < links.length; i++) {
    tag = links[i]
    if (tag.getAttribute('rel') == 'canonical') {
      canonical = tag.getAttribute('href')
    }
  }

  if (canonical == null) {
    canonical = `http://talks.m4dz.net${window.location.pathname}`
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    tag.setAttribute('href', canonical)
    document.head.appendChild(tag)
  }

  remark.macros.ref = function() {
    let search = []
    if (query.lang) search.push(`lang=${query.lang}`)
    if (query.format) search.push(`format=${query.format}`)

    let url = search.length
      ? `${canonical}?${search.join('&')}`
      : canonical

    return `<div class="ref"><a href="${url}">${url}</a></div>`
  }

  const slideshow = remark.create({
    sourceUrl:      `./${source}`,
    ratio:          (query.wide && JSON.parse(query.wide))? '16:9' : '4:3',
    highlightStyle: 'github',
    highlightLines: true,
    highlightSpans: true
  })

  slideshow.on('afterShowSlide', (slide) => {
    SVGInjector(document.querySelectorAll('.remark-visible [src*=icons]'))

    if (slide.properties.name == 'thanks' &&
        !/no-scroll/.test(slide.properties.class)) {
      setTimeout(() => {
        document.getElementById('slide-thanks').classList.add('scroll')
      }, 2000)
    }

    if (/video/.test(slide.properties.class)) {
      let vid = document.querySelector('.remark-visible video')
      setTimeout( () => { vid.play() }, 200)
    }
  })

  slideshow.on('beforeHideSlide', (slide) => {
    if (/video/.test(slide.properties.class)) {
      let vid = document.querySelector('.remark-visible video')
      vid.pause()
    }
  })
})
