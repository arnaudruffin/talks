name: cover
class: middle

# Git as a continuous manager

How to use Git power to automate your run

![:ref]

---
class: middle

# Hooks & Bare

Use:

- _SSH_ access on deployment end-server
- _Bare_ repository:<br>`git init --bare project.git`
- _Deploy remote_ on developers side:<br>`git remote add deploy ssh://me@end-server/project.git`

Define:

- _Hooks_ in bare repository
- _Scripts_ to automate tasks


---
class:

# Update & Post-receive

- _update_ can automate tasks for each branch
- _post-receive_ can run global tasks at each push

```txt
» |madslab@ssh4| talks.git ‡ master = tree -L 2
├── branches
├── config
├── description
├── HEAD
├── hooks
│   ├── post-receive
│   ├── post-update.sample
│   ├── pre-receive.sample
│   └── update
├── index
├── info
├── logs
├── objects
└── refs
```

.center[Then `git push deploy` 👌]


---
class:

# Scripts

Use _external scripts_ to isolate tasks:

```bash
#!/bin/bash
# hooks/update

GIT_DIR=$(dirname `pwd`)
CUR_DIR=$(pwd)

while read oldrev newrev ref
do
	# Load tasks from hooks/update.d
	if test -d "$CUR_DIR/update.d/"; then
		for task in "$CUR_DIR/update.d/*.sh"; do
			test -r "$task" && . "$task"
		done
		unset task
	fi
done
```

---
class:

.breadcrumb[Use-cases]

# Unit testing

## <i class="fas fa-wrench"></i> Continous Integration

Jenkins, Travis, Gitlab CI, etc.

.center[**VS**]


## <i class="fas fa-code-branch"></i> Tests scripts

```bash
#!/bin/sh
# hooks/update.d/10-unit-tests.sh

RAND=$(head /dev/urandom | tr -dc _A-Z-a-z-0-9 | head -c6; echo '')
TARGET="/tmp/git.$RAND"
$BRANCH = $(echo $refs | cut -d '/' -f 3)

mkdir "$TARGET"
git --work-tree=$TARGET --git-dir=$GIT_DIR checkout --force $BRANCH
cd "$TARGET"

make unitTests
```


---
class:

.breadcrumb[Use-cases]

# Functional testing

## <i class="fas fa-wrench"></i> Online tools and platforms

BrowserStack, Litmus, Sauce Labs, etc.

.center[**VS**]


## <i class="fas fa-code-branch"></i> Tests scripts

```bash
#!/bin/sh
# hooks/update.d/10-functional-tests.sh

RAND=$(head /dev/urandom | tr -dc _A-Z-a-z-0-9 | head -c6; echo '')
TARGET="/tmp/git.$RAND"
$BRANCH = $(echo $refs | cut -d '/' -f 3)

mkdir "$TARGET"
git --work-tree=$TARGET --git-dir=$GIT_DIR checkout --force $BRANCH
cd "$TARGET"
# Run tests locally or on platforms using APIs w/ cURL
make funcTests
```


---
class:

.breadcrumb[Use-cases]

# Build

## <i class="fas fa-wrench"></i> Continuous Integration tools

.center[**VS**]

## <i class="fas fa-code-branch"></i> Build scripts (e.g. w/ Docker)

```bash
#!/bin/sh
# hooks/update.d/20-build.sh

RAND=$(head /dev/urandom | tr -dc _A-Z-a-z-0-9 | head -c6; echo '')
TARGET="/tmp/git.$RAND"
$BRANCH = $(echo $refs | cut -d '/' -f 3)

mkdir "$TARGET"
git --work-tree=$TARGET --git-dir=$GIT_DIR checkout --force $BRANCH
cd "$TARGET"

make build
```


---
class:

.breadcrumb[Use-cases]

# Delivery

## <i class="fas fa-wrench"></i> Filesystems

Userspace filesystem, SSH/SFTP, Rsync, etc.

.center[**VS**]

## <i class="fas fa-code-branch"></i> Checkout in production dir

```bash
#!/bin/sh
# hooks/post-receive.d/10-deploy.sh

TARGET="/srv/app"

if [[ $ref = refs/heads/production ]];
then
	git --work-tree=$TARGET \
		--git-dir=$GIT_DIR checkout \
		--force production
fi
```


---
class:

.breadcrumb[Use-cases]

# Migrations

## <i class="fas fa-wrench"></i> CI Plugins / Scripts

.center[**VS**]

## <i class="fas fa-code-branch"></i> Run migrations

```bash
#!/bin/sh
# hooks/post-receive.d/15-migrate.sh

TARGET="/srv/app"

if [[ $ref = refs/heads/production ]];
then
	git --work-tree=$TARGET \
		--git-dir=$GIT_DIR checkout \
		--force production
	cd $TARGET
	./manage migrate-all
	./manage restart
fi
```


---
class:

.breadcrumb[Use-cases]

# Features-flipping

## <i class="fas fa-wrench"></i> Feature flags libraries / tools

.center[**VS**]

## <i class="fas fa-code-branch"></i> Flip using config files

.large[
- Use INI files for _ACL_/_Perms_/_Flags_
- Rely on them in your libraries
- Push them on end-server
- Restart / Reload app using hook scripts
]


---
class: middle

# Reporting & Alerts

.large[
- Use _git-multimail_ for emails alerts
- Send messages to _IRC_/_XMPP_/_Slack_/etc. APIs
- Expose _JSON_/_BSON_ _Streams_ for clients
- Log scripts outputs and use _ELK_ stack to visualize results
]


---
class: center, middle, inverse, single

# **Scripts are powerful,<br>Git is powerful enough**

![The Making Of Concrete And Gold Mind Blown GIF by Foo Fighters](./blow.gif)

# **use your imagination**


---
name: speaker
class: center

# **Thanks!**

![m4dz](../img/m4dz.jpg)

## I'm m4dz

.extras[
[m4dz.net](https://m4dz.net) | [@m4d_z](https://twitter.com/m4d_z) | PGP [0xD4627C417D969710](http://m4dz.net/0xD4627C417D969710.asc)
]

.org[
## ![alwaysdata](../img/alwaysdata.svg)

.extras[
  [alwaysdata.com](https://www.alwaysdata.com)
]
]


---
name: thanks
class: no-scroll


![:ref]

licenced under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)