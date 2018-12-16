# ReactNative/React with Lerna example

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This repository demonstrate how to make monorepo for sharing code between React-Native project and React project.

## Libs version

+ react-native: 0.57.8,
+ react: 16.6.3,
+ lerna: 3.6.0

## Installation

`$ npm install -g lerna`

then inside project root execute

`$ lerna bootstrap`

after bootstraping and hoisting dependencies just run project.

### Web

`$ cd packages/web && npm run start`

### Mobile

`$ cd packages/mobile && react-native run-android`

or

`$ cd packages/mobile && react-native run-ios`
