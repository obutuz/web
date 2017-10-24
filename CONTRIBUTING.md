# How To Contribute

We love pull requests from everyone. Reading this document means you're considering to take time out of your busy schedule to contribute to this project and that is most appreciated.

By participating in this project, you agree to abide by [our code of conduct](CODE_OF_CONDUCT.md).

## Getting Started

First of all, make sure that you have Node.js and Yarn installed on your machine.

* [How to install Node.js](https://nodejs.org/en/download/package-manager/)
* [How to install Yarn](https://yarnpkg.com/lang/en/docs/install/)

Afterwards, fork this project, then clone your repo:

```
git clone git@github.com:your-username/ui.git
```

Get the dependencies needed for this project:

```
yarn install
```

Finally, start create-react-app's local server so you can run your app in development:

```
yarn start
```

This project requires our API backend to run properly, so you'll have to setup [Open Budget Core](https://github.com/obudget/core) on your machine as well.

Instructions for installing the API backend are posted here: https://github.com/obudget/core/blob/master/CONTRIBUTING.md#getting-started

The app is located (by default) at http://localhost:3000

## Coding Standards

When contributing, please follow the coding standards mentioned below so we can have nice and consistent-looking code that's easy to read for everyone.

### EditorConfig

Use an editor (or a plugin for your editor) that supports [EditorConfig](http://editorconfig.org).

Our [.editorconfig file](.editorconfig) should set your editor to OpenBudget's preferred settings automatically:

* [UTF-8 charset](https://en.wikipedia.org/wiki/UTF-8)
* [Unix-style line breaks](http://www.cs.toronto.edu/~krueger/csc209h/tut/line-endings.html)
* [End file with a newline](https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline)
* [No trailing whitespace before a line break](https://softwareengineering.stackexchange.com/questions/121555/why-is-trailing-whitespace-a-big-deal)
* [Use 2 spaces instead of tabs for indentation](https://github.com/rrrene/elixir-style-guide#spaces-indentation)

### ESLint

To ensure code quality, we're using [ESLint](https://eslint.org/), a code analysis tool that helps enforce quality code.

Our project follows the [Javascript Style Guide by AirBnb](https://github.com/airbnb/javascript).

Before pushing your code, make sure to check if the quality of your code is good by doing the following command:

```
yarn run lint
```

If you get no errors from ESLint, your pull request will most likely be accepted.

### Testing and Code Coverage

Writing tests for the code that you've written is strongly encouraged. This ensures the integrity of the code that you've written.

Before pushing your code, make sure that all tests are passing to know that your changes aren't breaking anything by doing the following command:

* `yarn test`

### Additional Notes

* Add as many comments and documentation as you need for the code that you're going to write. OpenBudget should be accessible for developers of all experience and skill levels. Better to have too many than none at all.
* Don't be shy about adding line breaks between your code. A couple of empty lines between blocks of code can really improve readability.

## New to React or Web Development?

The greatest challenge about being a Javascript developer in this day and age is that there are so many libraries and frameworks to choose from.

Naturally, learning one piece of Javascript technology won't necessarily mean that you'll be able to learn other alternatives immediately. Different technologies have different way of doing things.

React.js is a library for building user interfaces. The great thing about React is that it only focuses on the view-side of the MVC architecture. This makes it a lot simpler compared to other popular libraries like Angular and Ember.

When it comes to React.js, it's challenging in its own right because you have to learn multiple things at the same time. On a basic level, you have to learn the following things to get started on this project:

* [ES6](http://es6-features.org)
* [React](https://reactjs.org/)
* [Redux](http://redux.js.org/)

It will take a lot of time and effort on your part to learn these things, but once everything clicks, you'll see why we decided to go with these technologies in the first place. You'll also come to love the technologies involved in this project.

With that said, the aim of this project is to be approachable enough for anyone (even beginners) to be able to contribute to. In most cases, you should be capable enough to contribute to this project after getting a grasp of the basics of React and Redux.

Here are some resources to help you get started on your journey to the world of React.

### React

* [Official tutorial from React's website](https://reactjs.org/tutorial/tutorial.html)
* [Awesome React - A collection of resources about React](https://github.com/enaqx/awesome-react)

### Redux

* [Official introduction guide from Redux's website](http://redux.js.org/docs/basics/)
* [redux-tutorial - A step by step tutorial for learning Redux](https://github.com/happypoulp/redux-tutorial)
* [Getting Started With React Redux by Yang-Hsing](https://www.codementor.io/mz026/getting-started-with-react-redux-an-intro-8r6kurcxf)

### ES6

* [ES6 Features](http://es6-features.org/)
* [ES6-Learning - A collection of resources for learning ES6](https://github.com/ericdouglas/ES6-Learning)
* [Learn ES6 by doing it by ES6 Katas](http://es6katas.org/)
