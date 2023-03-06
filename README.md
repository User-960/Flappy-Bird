# Flappy-Bird

The main purpose of the project is to write the project based on Object-oriented programming (OOP) paradigm. The project itself is a game Flappy Bird, which is drawn on canvas. The Flappy-Bird is built on the Webpack.

### Rules of the game

At the start of the game, a field appears on which different entities are drawn. The essence of the game is such that the bird must fly through the free space of the pipes. A score is recorded for each flight. For a certain number of points is awarded a medal. If the bird collides with a pipe or falls to the ground, it is game over.

What is used:

- Programming languages: HTML, CSS, JavaScript ES6;
- Bundler: Webpack;
- Preprocessor: SCSS;
- Libraries: Babel, ESLint;

To clone repository

```shell
git clone https://github.com/User-960/Flappy-Bird.git
```

To install packages, use the command

```shell
npm install
```

## Commands

### Launching a development server

```shell
npm run start
```

### Building a project without optimization

```shell
npm run build-dev
```

### Building a project with optimization

```shell
npm run build-prod
```

### Cleaning up the dist folder

```shell
npm run clear
```

### Checking the src folder for an error according to the set of rules

```shell
npm run eslint
```
