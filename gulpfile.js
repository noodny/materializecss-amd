var gulp = require('gulp'),
    extend = require('extend'),
    optimize = require('gulp-requirejs-optimize');

var config = {
    baseUrl: 'bower_components/materialize/js',
    out: 'materialize.amd.js',
    paths: {
        'jquery': '../../jquery/dist/jquery',
        'animation': 'animation',
        'buttons': 'buttons',
        'cards': 'cards',
        'character_counter': 'character_counter',
        'collapsible': 'collapsible',
        'picker': 'date_picker/picker',
        'picker.date': 'date_picker/picker.date',
        'dropdown': 'dropdown',
        'forms': 'forms',
        'global': 'global',
        'hammerjs': 'hammer.min',
        'jquery.easing': 'jquery.easing.1.3',
        'jquery.hammer': 'jquery.hammer',
        'jquery.timeago': 'jquery.timeago.min',
        'leanModal': 'leanModal',
        'materialbox': 'materialbox',
        'parallax': 'parallax',
        'pushpin': 'pushpin',
        'scrollFire': 'scrollFire',
        'scrollspy': 'scrollspy',
        'sideNav': 'sideNav',
        'slider': 'slider',
        'tabs': 'tabs',
        'toasts': 'toasts',
        'tooltip': 'tooltip',
        'transitions': 'transitions',
        'velocity': 'velocity.min',
        'waves': 'waves'
    },
    shim: {
        'jquery': {exports: '$'},
        'animation': ['jquery'],
        'buttons': ['jquery'],
        'cards': ['jquery'],
        'character_counter': ['jquery'],
        'collapsible': ['jquery'],
        'dropdown': ['jquery'],
        'forms': ['jquery', 'global'],
        'global': {deps: ['jquery'], exports: 'Materialize'},
        'jquery.easing': ['jquery'],
        'jquery.hammer': ['jquery', 'hammerjs', 'waves'],
        'jquery.timeago': ['jquery'],
        'leanModal': ['jquery'],
        'materialbox': ['jquery'],
        'parallax': ['jquery'],
        'pushpin': ['jquery'],
        'scrollFire': ['jquery', 'global'],
        'scrollspy': ['jquery'],
        'sideNav': ['jquery'],
        'slider': ['jquery'],
        'tabs': ['jquery'],
        'toasts': ['global'],
        'tooltip': ['jquery'],
        'transitions': ['jquery', 'scrollFire'],
        'waves': {exports: 'Waves'}
    },
    optimize: 'none',
    exclude: ['jquery'],
    include: ['global', 'animation', 'buttons', 'cards', 'character_counter',
        'collapsible', 'dropdown', 'forms', 'hammerjs', 'jquery.easing',
        'jquery.hammer', 'jquery.timeago', 'leanModal', 'materialbox',
        'parallax', 'picker', 'picker.date', 'pushpin', 'scrollFire',
        'scrollspy', 'sideNav', 'slider', 'tabs', 'toasts', 'tooltip',
        'transitions', 'velocity', 'waves']
};

gulp.task('build', function() {
    return gulp.src('./main.js')
        .pipe(optimize(config))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:min', function() {
    return gulp.src('./main.js')
        .pipe(optimize(extend(config, {
            out: 'materialize.amd.min.js',
            optimize: 'uglify2',
            preserveLicenseComments: false
        })))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build', 'build:min']);