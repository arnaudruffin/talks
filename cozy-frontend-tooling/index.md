name: cover
class: middle

# Cozy Frontend tooling

![:ref]


---
layout: false
class: section middle center
background-image: url(../img/placeholders/)

# Les outils


---
layout: true

.breadcrumb[Les outils]


---
class: display-links middle

# En local

- [Github](https://github.com/cozy)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Webpack](https://webpack.github.io/docs/configuration.html)
- [PostCSS](http://postcss.org/)
- [Jest](https://facebook.github.io/jest/) / [Enzyme](http://airbnb.io/enzyme/)
- [Transifex](https://www.transifex.com/cozy/) <sup>(push)</sup>


---
class: display-links middle

# En Intégration Continue

- [Travis](https://travis-ci.org/cozy)
- [git-directory-deploy](https://github.com/X1011/git-directory-deploy)
- [Transifex](https://www.transifex.com/cozy/) <sup>(pull)</sup>


---
layout: false
class: section middle center
background-image: url(../img/placeholders/)

# Dév local


---
layout: true

.breadcrumb[Dév local]


---
class: middle

# Yarn

- outil de gestion de paquets du registre [NPM](https://www.npmjs.com/)
- plus rapide
- dépendances à plat (a-la-npm@3)
- on commit le _yarn.lock_ dans les repos des apps
- ⚠️ le publish vers le registre est visiblement cassé


---
class: middle

# Scripts NPM _(nom abusif)_

- wrappers vers des tâches plus bas-niveau
- utilisable avec Yarn
- tout est dans le _package.json_, rien dans des scripts externes
- les tâches complexes sont composées en parallèle ou en série avec `npm-run-all`


---
class: middle

# Tâches disponibles (`yarn run`)

- `install` : installe les deps du projet
- `test`&nbsp;<sup>[1]</sup> : exécute les tests
- `build`&nbsp;<sup>[1]</sup> : package les sources
- `watch` : mode dev, HMR, etc
- `watch:standalone` : mode dev via webpack-dev-server

<sup>[1]</sup> les tâches de test et de build sont précédées d'un linting


---
class: middle

# Webpack

- fichier d'entrée : `/webpack.config.js`
- fichiers de config : `/config/webpack.*.config.js`, avec _webpack-merge_
- actuellement : base, copyfiles, cozy-ui, disable-contexts, ~~hash~~, pictures, preact, prod


---
class: middle

# Webpack - Définitions

- `loaders` : effectue un test regexp et charge le fichier sources
- `plugins` : transforme la sortie


---
class: middle

# Webpack - Base

- définit les loaders de base (`js`, `css`, `json`)
- déclare le point d'entrée/sorties et les devtools
- déclare _HTMLWebpackPlugin_ pour générer le fichier d'`index.html` (qui sert de template à la stack)


---
class:

```ejs
<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<title><%= htmlWebpackPlugin.options.title %></title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<% _.forEach(htmlWebpackPlugin.files.css, function(file) { %>
  <link rel="stylesheet" href="<%- file %>">
<% }); %>
<% _.forEach(htmlWebpackPlugin.files.js, function(file) { %>
  <script src="<%- file %>" defer></script>
<% }); %>
<div role="application">
```


---
class: middle

# Webpack - Disable Contexts

- gestion des contextes (e.g. pour la localisation)
- dans un répertoire `/src/contexts/<ctx>`
- désactivés par défaut (_IgnorePlugin_)


---
class: middle

# Webpack - Preact

- active le support JSX
- alias `react` / `react-dom` sur `preact`
- 📌 On utilise des déclarations _React_ dans les sources (_testing_)

```jsx
import React from 'react'
import { translate } from '../plugins/preact-polyglot'
import classNames from 'classnames'

const App = ({ t, children }) => (
  /** YOUR COMPONENT HERE */
)
```


---
class: middle

# Webpack - Prod

- Active le mode de production (`NODE_ENV=production`)
- Déduplication
- Occurence Order
- Uglify
- Désactivation des devtools


---
class: middle

# Webpack - XHR Config

_coming soon…_


---
class: middle

# Jest

- runtime de tests (i.e. comme mocha)
- support natif JSX
- utilise des snapshots

```js
import React from 'react'
import renderer from 'react-test-renderer'

import Toolbar from '../src/components/Toolbar'

it('Renders correctly', () => {
  const component = renderer.create(<Toolbar />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
```


---
class: middle

# Jest - Tips

- les appels vers les assets sont mockés (`__mocks__` et `identity-obj-proxy`)
- gte Node v6 pour le mock de `className`
- update des snapshots : `$ yarn test -- -u`


---
class: middle

# Enzyme

- DOM testing
- shallow rendering (pas de `children`)
- teste les interactions

```jsx
import React from 'react'
import {shallow} from 'enzyme'

import Checkbox from '../src/components/Checkbox'

it('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<Checkbox />)

  expect(checkbox.text()).toEqual('Off')
  checkbox.find('input').simulate('change')
  expect(checkbox.text()).toEqual('On')
})
```


---
class: middle

# Transifex

- utiliser le client officiel
- les locales sources : `/src/locales/en.json`
- ⚠️ on ne versionne pas les traductions
- une tâche mid-level se charge des récupération
- 📌 penser à pousser les locales avant la PR : `$ tx push`


---
class: middle

# Locales

- les locales sont gérées par Polyglot
- surcharge possible par contexte : `/src/contexts/<ctx>/locales/<lang>.json`
- les traductions sont organisées en composant

```json
{
  "Toolbar": {
    "title": "Title",
    "notification counter": "Notifications (%count)"
  }
}
```


---
layout: false
class: section middle center
background-image: url(../img/placeholders/)

# CI (Intégration Continue)


---
class: middle

# Travis

- config dans `/.travis.yml`
- support Node v6
- utilise yarn grâce au `yarn.lock`
- installe manuellement le client Tx et Python 3.5
- `yarn test` puis `yarn run build`


---
class: middle

# Transifex

- récupération des locales `$ tx pull`
- le fichier de config `.transifexrc` est géré depuis un template
- le passwd est injecté depuis une variable d'env


---
class: middle

# Déploiement

- `yarn run deploy`
- uniquement sur `master`
- lors d'un build au vert
- pousse le contenu du répertoire `build` dans une branche `build`
- utilise une mécanique comme `subtree` mais plus propre
- le token Github est dans une variable d'env


---
layout: false
class: section middle center
background-image: url(../img/placeholders/)

# Cozy template


---
class: middle

# Embarque…

- config webpack modulaire
- modules node courants (i18n, classnames, preact…)
- squelette d'app preact


---
class: middle single

# Init


---
class: middle single

# Todo

---
layout: true

.breadcrumb[Cozy template]



---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Iconographie / Médias

- Icônes : [Linea](http://linea.io/) - [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Fontes

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

## Outils

- Moteur de présentation : [Remark](https://github.com/gnab/remark)

.licence[
![Cozy Cloud](../img/cozy.svg)

![:ref]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
