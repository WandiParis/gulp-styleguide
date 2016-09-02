/*eslint-env node */

import gulp from 'gulp'
import guide from 'sc5-styleguide'
import sass from 'gulp-sass'
import config from './config'

const styleguide = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        allFilesSrc,
        dest,
        globalSrc,
        jsFile,
        title
    } = cfg

    const applyStyles = () => {
        return gulp.src(globalSrc)
            .pipe(sass({
                errLogToConsole: true
            }))
            .pipe(guide.applyStyles())
            .pipe(gulp.dest(dest))
    }

    applyStyles.displayName = 'styleguide:applystyles'

    const generate = () => {
        return gulp.src(allFilesSrc)
            .pipe(guide.generate({
                title: title,
                server: true,
                extraHead: [
                    `<script src="${jsFile}"></script>`
                ],
                disableEncapsulation: true,
                rootPath: dest,
                overviewPath: 'README.md'
            }))
            .pipe(gulp.dest(dest))
    }

    generate.displayName = 'styleguide:generate'

    const task = gulp.series(generate, applyStyles)

    task.displayName = 'styleguide'
    task.description = 'Create styleguide'

    return task
}

export default styleguide
export {
    styleguide
}
