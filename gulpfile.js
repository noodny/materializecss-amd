var gulp = require('gulp'),
    extend = require('extend'),
    del = require('del'),
    fs = require('fs'),
    optimize = require('gulp-requirejs-optimize'),
    jasmine = require('gulp-jasmine2-phantomjs'),
    sequence = require('gulp-sequence'),
    config = require('./config.js');

gulp.task('build:default', function() {
    return gulp.src('./main.js')
        .pipe(optimize(extend({}, config, {
            optimize: 'none',
            out: 'materialize.amd.js'
        })))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:min', function() {
    return gulp.src('./main.js')
        .pipe(optimize(extend({}, config, {
            out: 'materialize.amd.min.js',
            optimize: 'uglify2',
            preserveLicenseComments: false
        })))
        .pipe(gulp.dest('./dist'));
});

gulp.task('test:prepare', function() {
    var specs = fs.readdirSync('test/src'),
        commonTpl = fs.readFileSync('test/src/common.html', {encoding: 'utf-8'});

    specs.forEach(function(spec) {
        if(fs.statSync('test/src/' + spec).isDirectory()) {
            var specTpl = fs.readFileSync('test/src/' + spec + '/index.html', {encoding: 'utf-8'}),
                template = commonTpl + specTpl + '<script type="text/javascript" src="../specs/' + spec + '.js"></script>';

            try {
                fs.mkdirSync('test/dist');
            } catch(e) {}

            fs.writeFileSync('test/dist/' + spec + '.html', template, {encoding: 'utf-8'});
        }
    });
});

gulp.task('test:run', function() {
    return gulp.src('test/dist/*.html')
        .pipe(jasmine());
});

gulp.task('test:cleanup', function() {
    del(['test/dist', 'TEST-*.xml']);
});

gulp.task('build', ['build:default', 'build:min']);
gulp.task('test', sequence('test:prepare', 'test:run', 'test:cleanup'));
gulp.task('default', sequence('build', 'test'));