requirejs-failbox
=================

A sandbox to reproduce crazy requirejs failures.


# Getting Started:

#### Install grunt cli globally:

```shell
npm install -g grunt-cli
```

#### Install the stuff

```shell
npm install
```

#### Run tests, open in browser

```shell
npm test
```

(wat)


### Problems we faced refactoring

Dependency management is generally a hard problem in all programming languages. It is even harder in javascript which has **no** built in dependency management system. Requrie js attempts to solve this hard problem by making it asynchronous, making it even harder.

1. loadtimeout for random modules?

Hints: http://requirejs.org/docs/errors.html#timeout:

"The paths config was used to set two module IDs to the same file, and that file only has one anonymous module in it. If module IDs "something" and "lib/something" are both configured to point to the same "scripts/libs/something.js" file, and something.js only has one anonymous module in it, this kind of timeout error can occur. The fix is to make sure all module ID references use the same ID (either choose "something" or "lib/something" for all references), or use map config."

This error popped up when refactoring web-engine (specifically for loading templates), but blew up even more in t2 in how we were loading our 'engine/lib/[whatever]' libraries.

The issue here, I believe, is when using the requirejs optimizer. Generally when doing so we want to define annonomyous modules. The method signature of the define module takes an optional name argument:

https://github.com/jrburke/requirejs/blob/master/require.js#L1973

The documentation, however, suggests that module names be handled by the optimizer: http://requirejs.org/docs/api.html#modulename for portability reasons.

What is happening under the hood here?

2. "Module not found" / 404 finding module

We ran into an interesting problem with the 'Uber' module in our configuration. There was a distinct difference how requirejs behaved in dev mode, and then in the built mode. This I believe also goes back to how the 'Paths' and 'Map' config relate to how requirejs generates the appropriate filenames to inject in the dom, and then how the r.js optimizer constructs the module names from the configuration.