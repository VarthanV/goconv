oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g goconv
$ goconv COMMAND
running command...
$ goconv (--version)
goconv/0.0.0 darwin-arm64 node-v17.8.0
$ goconv --help [COMMAND]
USAGE
  $ goconv COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`goconv hello PERSON`](#goconv-hello-person)
* [`goconv hello world`](#goconv-hello-world)
* [`goconv help [COMMANDS]`](#goconv-help-commands)
* [`goconv plugins`](#goconv-plugins)
* [`goconv plugins:install PLUGIN...`](#goconv-pluginsinstall-plugin)
* [`goconv plugins:inspect PLUGIN...`](#goconv-pluginsinspect-plugin)
* [`goconv plugins:install PLUGIN...`](#goconv-pluginsinstall-plugin-1)
* [`goconv plugins:link PLUGIN`](#goconv-pluginslink-plugin)
* [`goconv plugins:uninstall PLUGIN...`](#goconv-pluginsuninstall-plugin)
* [`goconv plugins:uninstall PLUGIN...`](#goconv-pluginsuninstall-plugin-1)
* [`goconv plugins:uninstall PLUGIN...`](#goconv-pluginsuninstall-plugin-2)
* [`goconv plugins update`](#goconv-plugins-update)

## `goconv hello PERSON`

Say hello

```
USAGE
  $ goconv hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/VarthanV/goconv/blob/v0.0.0/dist/commands/hello/index.ts)_

## `goconv hello world`

Say hello world

```
USAGE
  $ goconv hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ goconv hello world
  hello world! (./src/commands/hello/world.ts)
```

## `goconv help [COMMANDS]`

Display help for goconv.

```
USAGE
  $ goconv help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for goconv.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.2/src/commands/help.ts)_

## `goconv plugins`

List installed plugins.

```
USAGE
  $ goconv plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ goconv plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `goconv plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ goconv plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ goconv plugins add

EXAMPLES
  $ goconv plugins:install myplugin 

  $ goconv plugins:install https://github.com/someuser/someplugin

  $ goconv plugins:install someuser/someplugin
```

## `goconv plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ goconv plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ goconv plugins:inspect myplugin
```

## `goconv plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ goconv plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ goconv plugins add

EXAMPLES
  $ goconv plugins:install myplugin 

  $ goconv plugins:install https://github.com/someuser/someplugin

  $ goconv plugins:install someuser/someplugin
```

## `goconv plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ goconv plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ goconv plugins:link myplugin
```

## `goconv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ goconv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ goconv plugins unlink
  $ goconv plugins remove
```

## `goconv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ goconv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ goconv plugins unlink
  $ goconv plugins remove
```

## `goconv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ goconv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ goconv plugins unlink
  $ goconv plugins remove
```

## `goconv plugins update`

Update installed plugins.

```
USAGE
  $ goconv plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
