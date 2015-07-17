module.exports = {
    baseUrl: 'bower_components/materialize/js',
    paths: {
        'jquery': '../../jquery/dist/jquery',
        'picker': 'date_picker/picker',
        'picker.date': 'date_picker/picker.date',
        'hammerjs': 'hammer.min',
        'jquery.easing': 'jquery.easing.1.3',
        'jquery.timeago': 'jquery.timeago.min',
        'velocity': 'velocity.min'
    },
    shim: {
        'jquery': {exports: '$'},
        'animation': {deps: ['jquery']},
        'buttons': {deps: ['jquery']},
        'cards': {deps: ['jquery']},
        'character_counter': {deps: ['jquery']},
        'collapsible': {deps: ['jquery']},
        'dropdown': {deps: ['jquery']},
        'forms': {deps: ['jquery', 'global']},
        'global': {deps: ['jquery'], exports: 'Materialize'},
        'jquery.easing': {deps: ['jquery']},
        'jquery.hammer': {deps: ['jquery', 'hammerjs', 'waves']},
        'jquery.timeago': {deps: ['jquery']},
        'leanModal': {deps: ['jquery']},
        'materialbox': {deps: ['jquery']},
        'parallax': {deps: ['jquery']},
        'pushpin': {deps: ['jquery']},
        'scrollFire': {deps: ['jquery', 'global']},
        'scrollspy': {deps: ['jquery']},
        'sideNav': {deps: ['jquery']},
        'slider': {deps: ['jquery']},
        'tabs': {deps: ['jquery']},
        'toasts': ['global'],
        'tooltip': {deps: ['jquery']},
        'transitions': {deps: ['jquery', 'scrollFire']},
        'waves': {exports: 'Waves'}
    },
    exclude: [
        'jquery'
    ],
    include: [
        'global', 'animation', 'buttons', 'cards', 'character_counter',
        'collapsible', 'dropdown', 'forms', 'hammerjs', 'jquery.easing',
        'jquery.hammer', 'jquery.timeago', 'leanModal', 'materialbox',
        'parallax', 'picker', 'picker.date', 'pushpin', 'scrollFire',
        'scrollspy', 'sideNav', 'slider', 'tabs', 'toasts', 'tooltip',
        'transitions', 'velocity', 'waves'
    ],
    wrap: {
        endFile: 'main.js'
    }
};