'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styleguide = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-env node */

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _sc5Styleguide = require('sc5-styleguide');

var _sc5Styleguide2 = _interopRequireDefault(_sc5Styleguide);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleguide = function styleguide() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var cfg = _extends({}, _config2.default, params);

    var allFilesSrc = cfg.allFilesSrc;
    var dest = cfg.dest;
    var globalSrc = cfg.globalSrc;
    var jsFile = cfg.jsFile;
    var title = cfg.title;


    var applyStyles = function applyStyles() {
        return _gulp2.default.src(globalSrc).pipe((0, _gulpSass2.default)({
            errLogToConsole: true
        })).pipe(_sc5Styleguide2.default.applyStyles()).pipe(_gulp2.default.dest(dest));
    };

    applyStyles.displayName = 'styleguide:applystyles';

    var generate = function generate() {
        return _gulp2.default.src(allFilesSrc).pipe(_sc5Styleguide2.default.generate({
            title: title,
            server: true,
            extraHead: ['<script src="' + jsFile + '"></script>'],
            disableEncapsulation: true,
            rootPath: dest,
            overviewPath: 'README.md'
        })).pipe(_gulp2.default.dest(dest));
    };

    generate.displayName = 'styleguide:generate';

    var task = _gulp2.default.series(generate, applyStyles);

    task.displayName = 'styleguide';
    task.description = 'Create styleguide';

    return task;
};

exports.default = styleguide;
exports.styleguide = styleguide;