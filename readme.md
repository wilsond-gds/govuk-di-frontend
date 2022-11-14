# DI component library

## How the library is organised

Each component has a nunjucks `.njk` file, `SCSS` file and JavaScript `.mjs` file (if required) in its own folder within the `components` folder.

## Code for each component

### Nunjucks

Each component has a `template.njk` and `macro.njk` file. The nunjucks code in the component library needs to be registered with your application, so in `middleware/nunjucks.js` ensure the path to this package is passed into the `views` parameter of `nunjucks.configure`.

### CSS

The `all.scss` file imports the SCSS for each component with `@use` and then generates a message that this has been successful using `@warn`. For core this CSS file is then concatenated with the other CSS files in a build step in `package.json`: `yarn build`.
