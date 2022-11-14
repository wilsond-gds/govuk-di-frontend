# DI component library

## How the library is organised

Each component has a nunjucks `.njk` file, `SCSS` file and JavaScript `.mjs` file (if required) in its own folder within the `components` folder.

## Code for each component

### Nunjucks

Each component has a `template.njk` and `macro.njk` file. The nunjucks code in the component library needs to be registered with your application, so in `middleware/nunjucks.js` ensure the path to this package is passed into the `views` parameter of `nunjucks.configure`.

### CSS

The `all.scss` file imports the SCSS for each component with `@use` and then generates a message that this has been successful using `@warn`. For core this CSS file is then concatenated with the other CSS files in a build step in `package.json`: `yarn build`.

## JavaScript

Each component has an `.mjs` file containing the code required (if any). This code is then compiled (manually) using the settings in the `rollup.config.mjs` file by running `rollup -c`. The rollup tool produces an `all.js` file which is then incorporated into the other JavaScript code required during the `yarn build` step for core:

```
 "minfiy-build-front-end-gov-js": "mkdir -p dist/public/javascripts; uglifyjs node_modules/govuk-frontend/govuk/all.js node_modules/hmpo-components/all.js  node_modules/govuk-di-frontend/all.js src/assets/javascript/application.js -o dist/public/javascripts/application.js -c -m ",
```