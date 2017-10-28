'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var swallowError = function(error){
    console.log(error.toString());
}

/* CSS */
gulp.task('css', function(){
    return gulp.src('src/less/*.less')
        .pipe(plugins.less())
        .on('error', swallowError)
        .pipe(plugins.autoprefixer({ browsers: 'last 3 versions' }))
        .pipe(gulp.dest('src/css/'))
        .pipe(plugins.cssnano())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/css/'));
});

/* Default Task */
gulp.task('default', ['css']);

/* Watch Task */
gulp.task('watch', ['css'], function(){
    gulp.watch('src/less/**/*.less', ['css']);
});
