# gulp-styleguide

Génère un styleguide

## Installation

```
npm install --save-dev "github:wandiparis/gulp-styleguide"
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.babel.js

import styleguide from 'gulp-styleguide'

const compile = styleguide()

export {
    compile
}
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

```js
// gulpfile.babel.js

import styleguide from gulp-styleguide

const compile = styleguide({
    allFilesSrc: 'style/**/*.scss',
    dest: 'my-styleguide',
})

export {
    compile
}
```

## Paramètres

### allFilesSrc

Glob vers l'ensemble des fichiers de style.

Valeur par défaut : `'assets/scss/**/*.scss'`

### dest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `'styleguide'`

### globalSrc

Chemin du fichier SCSS global. Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `'assets/scss/global.scss'`

### jsFile

URL vers un fichier JS à injecter dans le styleguide.

Valeur par défaut : `''`

### title

Titre du styleguide

Valeur par défaut : `'styleguide'`
