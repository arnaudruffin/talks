name: cover
class: middle

# Privacy by Design

De l'autonomie de l'individu sur ses données personnelles

![:ref]


---
class: inverse single right bottom
background-image: url(superman.jpg)

# **Comment on se perçoit<br>en utilisant nos apps**


---
class: single right
background-image: url(kid-superhero.jpg)

# **Comment leurs éditeurs <br>nous perçoivent**


---
class: middle center single

.large[
![Up movie, Squirrel gif @Giphy](squirrel.gif)
]


---
class: middle center

# Le biais de gratuité

.large[
![](free-food.gif)
]

???
Dan Ariely le chocolat


---
layout: false
class: section bottom
background-image: url(../img/placeholders/primate-ape-thinking-mimic.jpg)

# La _privacy_, on en est où ?


---
layout: true

.breadcrumb[La _privacy_, on en est où ?]


---
class: single inverse
background-image: url(thermocells.png)

# La Data, bulle économique<br>du XXIe siècle


---
class: single middle

# Des grosses boîtes qui pompent les données


---
class: single middle

# Des petites boîtes qui pompent les données

.large[**et souvent, elles n'en ont même pas conscience**]

---
class: single middle

# Des startups qui pompent les données

.large[**parce qu'elles veulent faire comme les grands dans la cour de récré**]


---
class: middle center inverse

![Les shadoks pompaient…](./shadoks.gif)


---
class: middle

# Une histoire de données _pas vraiment_ volées

.center[
![Logo de Cambridge Analytica en 2016 pendant la campagne Trump](./cambridge_analytica_logo_2016.png)
]

--

.center[
Logo de Cambridge Analytica en 2016, pendant la campagne Trump
]


---
class: middle

# Vie privée, du point de vue de l'utilisateur·trice

.large[
* donner trop de pouvoir rend les choses trop complexes
* illusionner sur une protection trop parfaite
* ce n'est pas un enjeu du public
]

???

* e.g. uMatrix
* e.g Apple softs prefs
* les gens savent que leur données partent chez GAFAMs mais n'y sont pas sensibles


---
class: punchline, bottom

> I call this device a Personal Information Telecommunication Agent, or Pita for short. The acronym also stand for Pain In The Ass, which it is equally likely to be, because having all that connectivity is going to destroy what's left of everyone's privacy.

[David Gerrold, in Sm@rt Reseller, "future of computing" prediction, 1999](./pita.jpg)


---
layout: false
class: section bottom
background-image: url(../img/placeholders/nostalgy-collector-michelle-heavy-metal.jpg)

# Conception _Privacy by design_


---
layout: true

.breadcrumb[Conception _Privacy by design_]


---
class: middle

# Préquelle : Accountability pattern

.large[
* début des années 80
* ensemble de procédures
* démontre la conformité aux règles de gestion
* crée les responsables de la sécurité des <abbr title="systèmes d'information">SI</abbr>
* rapporte les preuves
]


---
class: middle

# Préquelle : Accountability pattern

.center[
![Un homme en smoking au volant d'une voiture bois un cocktail en en blâmant un autre sur l'accident qu'il a créé](./accident-you-asshole.gif)
]


---
class: middle center inverse

# 1995 : Privacy by Design

![Mickey has an idea](idea.gif)

???
Report from Information and Privacy Commissioner of Ontario, Canada, the Dutch Data Protection Authority and the Netherlands Organisation for Applied Scientific Research


---
class: middle

# 7 laws of identity

.large[

1. Proactive not reactive; Preventative not remedial
1. Privacy as the default setting
1. Privacy embedded into design
1. Full functionality – positive-sum, not zero-sum
1. End-to-end security – full lifecycle protection
1. Visibility and transparency – keep it open
1. Respect for user privacy – keep it user-centric
]

???

1. anticiper, identifier, prévenir les invasions, donc prendre des actions en amont de l'attaque
2. s'assurer que toutes les données personnelles sont protégées dans IT sans action supplémentaire
3. la vie privée est core-integrated
4. approche win-win, vie privée et sécurité ne sont pas en balance
5. la donnée n'est pas conservée plus que nécessaire et sécurisée tout du long
6. tous les acteurs sont sensibilisés aux problèmes de la donnée privée
7. les données privées sont protégées par des solutions fortes par défaut, correctement indiquées et des options simples pour l'utilisateur


---
class: middle

# PETs, vos nouveaux <del>animaux</del> outils de compagnie

.large[
* Chiffrement
* Gestion des métadonnées et des permissions
* Vérification légale intégrées au code
* Gouvernance des données
* Gestion des identités
]

https://iapp.org/news/a/2008-05-introduction-to-privacy-enhancing-technologies/

---
class: single inverse middle

# En pratique :


---
class: medium

# Lors de la conception

.large[
* Concevez des check-list impliquant toutes les enjeux de données
* Assurez-vous que tous les intervenants sont sensibilisés
* Ne demandez pas plus de permissions que nécessaire
* Auditez, testez, pen testez !
]

--
.large[
**côté technique…**

* Chaque feature valide la check-list, en tests automatisés
]

--

.large[
* Les jeux de tests ne viennent pas de la prod !
]

--
.large[
* Oubliez les frameworks de permissions tous prêts
]

--
.large[
* Tests fonctionnels sur des environnements multiples
]


---
class: middle center

# Exemple : Checklist ([GDPRChecklist.io](https://gdprchecklist.io/))

.large[
![](gdprchecklist.io.png)
]


---
class: middle center

# Exemple : Permissions

.large[
![](consent_1.png)
]

---
class: middle center

# Exemple : Permissions

.large[
![](consent_2.png)
]

---
class: medium

# Lors de l'exécution

.large[
* Minimisez la collecte de données
* Minimisez les données échangées avec les services tiers
* Pseudonimisez la donnée
* Vérifiez les formulaires (contact, login, assistance…)
* Supprimez régulièrement la donnée collectée
]

--
.large[
** côté technique…**

* Utilisez des services de gestion d'identités (OpenID…)
]

--
.large[
* Hashez / chiffrez / tokenizez les entrées
* Permutez, substituez, segmentez les données sensibles (Matomo…)
]

--
.large[
* Faites passer des cron !
]

---
class: middle center code

# Exemple : OpenID

.large[
![](oidc-redux.png)
]

→ [github://IdentityModel/oidc-client-js](https://github.com/IdentityModel/oidc-client-js)

---
class: middle center code

# Exemple : RSA Signature

.large[
![](jsencrypt-sign.png)
]


---
class: middle center code

# Exemple : RSA Encryption

.large[
![](jsencrypt-enc-html.png)
]


---
class: middle center code

# Exemple : RSA Encryption

.large[
![](jsencrypt-enc.png)
]


---
class: middle

# Browser : libs fournissant la couche Crypto

.large[
- jsencrypt
- js-nacl
- jwcrypto

→ [gist://jo:8619441](https://gist.github.com/jo/8619441)
]



---
class: medium

# Expérience utilisateur

.large[
* Founissez des réglages simples et des notices claires à valider
* N'exigez pas de passer par des services externes
* Pas de partage sur les réseaux par défaut
* Séparez les consentements (_shared data_ vs _analytics_)
]

--
.large[
**côté technique…**

* Utilisez les frameworks de notification pour ne pas polluer (toastr, Notify.js…)
]

--
.large[
* Utilisez des outils d'identités décentralisées (OpenID…), pas les réseaux sociaux
]

--
.large[
* Plus de jsSocials ~~par défaut~~ par pitié…
]

--
.large[
* Utilisez des outils de trace d'usages respecteux
]


---
class: middle center code

# Exemple : SweetAlert

.large[
![](swal.png)
]


---
class: middle center code

# Exemple : SweetAlert

.large[
![](sweetalert.png)
]


---
class: middle center code

# Exemple : SweetAlert

.large[
![](sweetalert_dom.png)
]


---
class: middle

# Exemple : SweetAlert

.large[
- configurable
- chainable
- promises
- compatible frameworks composants

→ [github://sweetalert2:sweetalert2](https://github.com/sweetalert2/sweetalert2)
]


---
class: middle center

# Exemple : [Traces d'usage avec Matomo](https://matomo.org/blog/2012/04/how-to-use-piwik-to-track-mobile-apps-activity-clicks-phones-errors-etc/)

.large[
![](matomo.png)
]


---
class: medium

# Fin du cycle de vie

.large[
* Rappelez régulièrement les utilisateurs·trices à leur confidentialité
* Facilitez l'export de données
* Supprimez les données des comptes supprimés
* Supprimez les données à la fermeture du service
]

--
.large[
** côté technique…**

* Mettez en place des APIs documentées (Swagger, Apiary…) et utilisables
]

--
.large[
* Utilisez des formats de données ouverts (XML, JSON…)
]

--
.large[
* `rm -rf /`
]


---
class: middle center

# Exemple : [Swagger](https://swagger.io) / [OpenAPI](https://www.openapis.org)

.large[
![](swagger-editor.png)
]


---
class: middle center

# Use [REST](https://www.restapitutorial.com)

.large[
![](rest-api.png)
]


---
class: middle center code

# [OBOE](http://www.oboejs.com) for large JSON contents

.large[
![](oboe.png)
]


---
class: middle center code

# Use GraphQL

.large[
![](graphql.png)
]


---
class: middle center

# GraphQL Interface

.large[
![](graphiql.png)
]


---
class: inverse single middle center

# Pour résumer :


---
class: middle

# OWASP : top 10 privacy risks

.large[
1.  Web Application Vulnerabilities
2.  Operator-sided Data Leakage
3.  Insufficient Data Breach Response
4.  Insufficient Deletion of personal data
5.  Non-transparent Policies, Terms and Conditions
6.  Collection of data not required for the primary purpose
7.  Sharing of data with third party
8.  Outdated personal data
9.  Missing or Insufficient Session Expiration
10. Insecure Data Transfer
]


---
class: middle center

# Tracer les parcours de la donnée, pas des utilisateurs

![Life of Brian: you don't need to follow everybody](./life_of_brian.gif)

---
class: middle center

# Gérer les identités

![Un homme apparaît en boucle pour saluer le public](./clones.gif)


---
class: middle center

# La pseudonimisation, Graal de l'analyse de données

![jennifer love hewitt whos name i always forget GIF @Giphy](summer.gif)

[Why Anonymous Data Sometimes Isn't, a Netflix story](https://www.wired.com/2007/12/why-anonymous-data-sometimes-isnt/)


---
class: single inverse middle

.center[
# **Differential privacy**

![A spining coin GIF @Giphy](coin.gif)
]

.large[
* [Differential privacy @Wikipedia](https://en.wikipedia.org/wiki/Differential_privacy)
* [Harvard University Privacy Tools Project](https://privacytools.seas.harvard.edu/differential-privacy)
* [Cornell university Library](https://arxiv.org/abs/1706.09479)
* [Uber SQL DIfferential Privacy](https://github.com/uber/sql-differential-privacy)
]


---
layout: false
class: section bottom
background-image: url(../img/placeholders/egg-hammer-threaten-violence.jpg)

# Penser la vie privée autrement


---
layout: true

.breadcrumb[Penser la vie privée autrement]


---
class: inverse bottom punchline

# Espérer est illusoire

> La _privacy by design_ est complètement aux antipodes de la souveraineté numérique des individus&nbsp;: on fait sans les individus, on protège la vie privée sans définir ce que c'est.

Fabrice Rochelandet. Souveraineté numérique et modèle d'affaires. In: Numérique, reprendre le contrôle. Framasoft: 2016, p.65


---
class: middle

# _Privacy by default_

.large[
* assure qu'un minimum de données est en jeu
* simplifie le processus pour les utilisateurs·trices
* évite les difficultés dans les réglages de confidentialité
* force _idéalement_ le niveau de protection maximal _par défaut_
]


---
class: middle

# Agir

.large[
* penser la donnée comme un vivant périssable
* chaque acteur se doit d'alerter
* mesurer chaque brique unitairement
* assurer la portabilité
]


---
class: single middle

# **Code is Law**


---
class: single middle

# **Le développeur est politique**


---
class: single middle inverse

# _Publicness_

> Publicness is value. This is an argument I'll make that what's public is owned by the public — whether that's governments' actions or images taken in public space — and whenever that is diminished, it robs from us, the public.

Jeff Jarvis. 2011

→ [Jeff Jarvis - Privacy and Publicness and the power behind it - Youtube](https://www.youtube.com/watch?v=cVF5zPLPbvw)


---
class: middle tiles

# _ Privacy by using_

* <svg><use xlink:href="../img/icons/fontawesome/fa-solid.svg#user-shield"/></svg> sensibiliser les usages
* <svg><use xlink:href="../img/icons/fontawesome/fa-solid.svg#bullhorn"/></svg>lancer des alertes
* <svg><use xlink:href="../img/icons/fontawesome/fa-solid.svg#sitemap"/></svg>agir chacun à son niveau

---
class: punchline bottom

> Nul ne sera l'objet d'immixtions arbitraires dans sa vie privée, sa famille, son domicile ou sa correspondance, ni d'atteintes à son honneur et à sa réputation. Toute personne a droit à la protection de la loi contre de telles immixtions ou de telles atteintes.

--

Déclaration universelle des droits de l'homme. Article 12, 1948


---
name: speaker
class: center middle single

![mad hatter](../img/m4dz.jpg)

# m4dz

**Paranoïd Web Dino & Tech Evangelist**

.extras[
[m4dz.net](https://m4dz.net) | [@m4d_z](https://twitter.com/m4d_z) | PGP [0xD4627C417D969710](https://m4dz.net/0xD4627C417D969710.asc)
]

.org[
## ![alwaysdata](../img/alwaysdata.svg)

.extras[
  [www.alwaysdata.com](https://www.alwaysdata.com)
]
]


---
layout: false
class: section, bottom
background-image: url('../img/placeholders/collaborate.jpg')

# Questions ?


---
name: thanks

# Merci !

## Icônes

- [FontAwesome](https://fontawesome.com/)

## Polices de caractère

- Titrage : [Sinzano](http://typodermicfonts.com/sinzano/) by Typodermic http://typodermicfonts.com - [Fontspring webfont EULA](https://www.fontspring.com/licenses_text/lv4e5lv2k2)
- Intertitres & labeur : [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-sans-pro/master/LICENSE.txt)
- Monospace : [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) by Adobe https://github.com/adobe-fonts - [Open Font Licence](https://raw.githubusercontent.com/adobe-fonts/source-code-pro/master/LICENSE.txt)

## Outils

- Moteur de présentation : [Remark](https://github.com/gnab/remark)

.licence.round[
![Alice in Wonderland Mad Hatter](../img/mad-hatter.gif)

![:ref]

disponible sous licence [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
]
