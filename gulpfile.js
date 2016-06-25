"use strict";
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    insert = require('gulp-insert'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('scss/build.scss')
        .pipe(maps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(insert.wrap('<style>', '</style></head>'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'));
});
