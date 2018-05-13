# webpack-code-splitting

> Testing the waters of code splitting and async/dynamic module loading

## Try it out

#### 1. Install deps

```bash
$ npm i
```

#### 2. Build the bundles

You'll notice it'll build the main bundle, a "common" bundle for extracted shared modules, and a separate file for each of the dynamically loaded modules

```bash
$ npm run build
```

#### 3. Open `dist/index.html` in a browser
