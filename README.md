# Open Budget Web

[![CircleCI](https://circleci.com/gh/obudget/web.svg?style=svg)](https://circleci.com/gh/obudget/web) [![codecov](https://codecov.io/gh/obudget/web/branch/master/graph/badge.svg)](https://codecov.io/gh/obudget/web) [![Greenkeeper badge](https://badges.greenkeeper.io/obudget/web.svg)](https://greenkeeper.io/) [![Maintainability](https://api.codeclimate.com/v1/badges/33e91f231017c98b01f0/maintainability)](https://codeclimate.com/github/obudget/web/maintainability) [![Gitter chat](https://badges.gitter.im/obudget.png)](https://gitter.im/obudget) [![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/terenceponce "Donate to this project using Patreon")

## Overview

* [OpenBudget](https://www.openbudget.xyz) is an open source envelope budgeting platform inspired by popular budgeting apps like [YNAB](https://youneedabudget.com) and [GoodBudget](https://goodbudget.com).
* This is the user interface for [OpenBudget Core](https://github.com/obudget/core), which is also an open source project.
* A public deployment of this code is maintained at [app.openbudget.xyz](https://app.openbudget.xyz)

## Why Open Source?

* I started this project as a way for me to learn Elixir and ReactJS.
* I've been a fan of envelope budgeting since 2011 and I always found it a challenge to share my passion for budgeting with other people because a lot of the best budgeting apps are locked behind a paywall.
* Being open source ensures that anyone who uses this software will know what's going on under the hood. e.g. Prevent unethical situations or enforcing transparency.
* Another benefit of being open source is that anyone can contribute and improve OpenBudget for everyone.
* This project was inspired by [OpenDota](https://www.opendota.com), which is an open source project for viewing data related to the popular game Dota 2. The reason why it's big and successful is because it's open source. I want to emulate what they did for this project.
* Honestly, this endeavor is too big for 1 person to do. I want to encourage other developers who are better skilled than I am to help out in this project by going all-in on open source.

## Tech Stack

* View: [React](https://reactjs.org)
* State: [Redux](https://redux.js.org)
* UI: [Semantic UI](https://react.semantic-ui.com/)

## Quick Start

```
git clone https://github.com/obudget/web.git
cd ui
yarn install
yarn start
```

For more information, check out our [guidelines for contributing](CONTRIBUTING.md)

## Developer Notes

* In order to run this locally, you also need to setup [OpenBudget Core](https://github.com/obudget/core) and run it alongside OpenBudget UI.
