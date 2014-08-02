	var gulp = require('gulp');
	var browserify = require('gulp-browserify');
	var rename = require('gulp-rename');
	var watch = require('gulp-watch');
	  
	gulp.task("browserify", function() {
	   gulp.src('main.js')     
	        .pipe(browserify())
	        .pipe(rename('bundle.js'))
	        .pipe(gulp.dest('bundle/'))
	}); 
 
	gulp.task("watch", function() {    
	    gulp.watch("**/*.js", ["browserify"]);
	}); 