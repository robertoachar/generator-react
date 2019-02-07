# generator-react

[![Travis Status][travis-badge]][travis-url]
[![AppVeyor Status][appveyor-badge]][appveyor-url]
[![CircleCI Status][circleci-badge]][circleci-url]
[![Coveralls Status][coveralls-badge]][coveralls-url]
[![NPM Version][npm-badge]][npm-url]
[![License][license-badge]][license-url]

> Yeoman generator for React apps.

This generator provides the following features:

- **public** and **src** folders as a starter point to build your app.
- **EditorConfig** to help you define and maintain consistent coding styles between different editors.
- **ESLint** to provide a pluggable linting utility for JavaScript.
- **Airbnb** React/JSX style guide.
- **Prettier** as an opinionated code formatter.
- **README.md** and **CHANGELOG.md** with information about the project, installation, usage, development, author and license.
- **Badge** for License.

# Project files

```text
.
|--- public
|    |--- favicon.ico
|    |--- index.html
|    |--- manifest.json
|--- src
     |--- components
          |--- App.jsx
|    |--- index.jsx
|--- .editorconfig
|--- .eslintignore
|--- .eslintrc.json
|--- .gitattributes
|--- .gitignore
|--- .npmrc
|--- .prettierrc
|--- CHANGELOG.md
|--- LICENSE
|--- package.json
|--- README.md
```

# Installation

- Install Yeoman

```bash
$ npm install -g yo
```

- Install Generator

```bash
$ npm install -g @robertoachar/generator-react
```

# Usage

- Create an app

```bash
# Create a directory for your app
$ mkdir awesome-app

# Change into directory
$ cd awesome-app

# Generate an app
$ yo @robertoachar/react
```

- Run scripts

| Action                      | Usage           |
| --------------------------- | --------------- |
| Start development mode      | `npm start`     |
| Build for production        | `npm run build` |
| Lint code                   | `npm run lint`  |
| Run tests                   | `npm run test`  |
| Eject from create-react-app | `npm run eject` |

# Development

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)
- Install Yeoman CLI

```bash
$ npm install -g yo
```

### Clone the repo

```bash
$ git clone https://github.com/robertoachar/generator-react.git
```

### Run generator

```bash
# Change into directory
$ cd generator-react

# Link generator
$ npm link

# Run generator
$ yo @robertoachar/react
```

# Author

[Roberto Achar](https://twitter.com/robertoachar)

# License

[MIT](https://github.com/robertoachar/generator-react/blob/master/LICENSE)

[travis-badge]: https://travis-ci.org/robertoachar/generator-react.svg?branch=master
[travis-url]: https://travis-ci.org/robertoachar/generator-react
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/robertoachar/generator-react?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/robertoachar/generator-react
[circleci-badge]: https://circleci.com/gh/robertoachar/generator-react/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/robertoachar/generator-react
[coveralls-badge]: https://coveralls.io/repos/github/robertoachar/generator-react/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/robertoachar/generator-react?branch=master
[npm-badge]: https://img.shields.io/npm/v/@robertoachar/generator-react.svg
[npm-url]: https://www.npmjs.com/package/@robertoachar/generator-react
[license-badge]: https://img.shields.io/github/license/robertoachar/generator-react.svg
[license-url]: https://opensource.org/licenses/MIT
