<p align='center'>
  <h1 align='center'>Falieson's 2017 Typescript React Redux - Universally</h1>
  <p align='center'><img width='150' src='https://raw.githubusercontent.com/ctrlplusb/assets/master/logos/react-universally.png' /></p>
  <p align='center'>A starter kit for universal react applications with typescript.</p>
</p>

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-v24.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![nps friendly](https://img.shields.io/badge/nps-friendly-blue.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## About

This starter kit is based off `react-universally` which provides

```text
all the build tooling and configuration you need to kick off your next universal React project,
whilst containing a minimal "project" set up allowing you to make your own architecture decisions (Redux/MobX etc).
```

Then, I went ahead added my architecture decisions and preferences. I'm trying to organize commits so you can rebase and drop any commits starting w/ "ESLINT - " and get back to the base provided by `react-universally`

> NOTICE: Please read this important [issue](https://github.com/ctrlplusb/react-universally/issues/409) about the behaviour of this project when using `react-async-component`, which is by default bundled with it.

## Commands - READ THIS

```text
* nps commit            : Creates a commit, don't use `git commit -m ...`
* nps precommit         : Use series.nps('precommit.a', .'precommit.z')
* nps                   : Starts the development server
* nps launch.prod       : Starts the production server
* nps build             : Starts the build process
```

## Features - Separated by Repo

### falieson/2017-typescript-react (this one)

- [x] 🔨  refactor 'shared'=>'src' (per [ctrlplusb/react-universally#521](https://github.com/ctrlplusb/react-universally/issues/521))
- [x] 🔨  refactor 'shared/actions' & 'shared/reducers' =>'shared/redux/...' .
- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [ ] 🎶  `eslint` preferences, @falieson 's preferences based on @kentcdodds .

### from falieson/react-universally--typescript/features/redux-opinionated

[Falieson/react-universally--typescript/feature/redux-opinionated](https://github.com/Falieson/react-universally--typescript/tree/feature/redux-opinionated)

- 💰  `redux` as the state manager.
- 🔆  `redux-developer-tools` chrome extension
- 🎶  `typescript` because Flow doesn't work as well, and we will get increasing returns as bugs are reduced while adding developers.
- 🎶  `tslint` like eslint but for typescript, @falieson 's preferences.

### from react-universally

- 👀 `react` as the view.
- 🔀 `react-router` v4 as the router.
- 🚄 `express` server.
- 🎭 `jest` as the test framework.
- 💄 Combines `prettier` and Airbnb's ESlint configuration - performing code formatting on commit. Stop worrying about code style consistency.
- 🖌 Very basic CSS support - it's up to you to extend it with CSS Modules etc.
- ✂️ Code splitting - easily define code split points in your source using `react-async-component`.
- 🌍 Server Side Rendering.
- 😎 Progressive Web Application ready, with offline support, via a Service Worker.
- 🐘 Long term browser caching of assets with automated cache invalidation.
- 📦 All source is bundled using Webpack v3.
- 🚀 Full ES2017+ support - use the exact same JS syntax across the entire project. No more folder context switching! We also only use syntax that is stage-3 or later in the TC39 process.
- 🔧 Centralised application configuration with helpers to avoid boilerplate in your code. Also has support for environment specific configuration files.
- 🔥 Extreme live development - hot reloading of ALL changes to client/server source, with auto development server restarts when your application configuration changes.  All this with a high level of error tolerance and verbose logging to the console.
- ⛑ SEO friendly - `react-helmet` provides control of the page title/meta/styles/scripts from within your components.
- 🤖 Optimised Webpack builds via HappyPack and an auto generated Vendor DLL for smooth development experiences.
- 🍃 Tree-shaking, courtesy of Webpack.
- 👮 Security on the `express` server using `helmet` and `hpp`.
- 🏜 Asset bundling support. e.g. images/fonts.
- 🎛 Preconfigured to support development and optimised production builds.
- ❤️ Preconfigured to deploy to `now` with a single command.

## Getting started

```bash
git clone https://github.com/falieson/2017-typescript-react my-project
cd my-project
npm install
npm run dev
```

Now go make some changes to the `Home` component to see the tooling in action.

## Docs

- [Project Overview](/internal/docs/PROJECT_OVERVIEW.md)
- [Project Configuration](/internal/docs/PROJECT_CONFIG.md)
- [Package Script Commands](/internal/docs/PKG_SCRIPTS.md)
- [FAQ](/internal/docs/FAQ.md)
- [Feature Branches](/internal/docs/FEATURE_BRANCHES.md)
- [Deploy your very own Server Side Rendering React App in 5 easy steps](/internal/docs/DEPLOY_TO_NOW.md)
- [Changelog](/CHANGELOG.md)
