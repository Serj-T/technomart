"use strict";

var gulp = require('gulp');
var	less = require('gulp-less');
var	plumber = require('gulp-plumber'); /*продолжает работу watch с ошибками без выхода*/
var postcss = require('gulp-postcss'); /*для autoprefixer*/
var prefix = require('autoprefixer'); /*плагин для postcss*/
var	server = require('browser-sync').create(); /*обновление localhost*/

gulp.task('style', function() {
	gulp.src('less/style.less') /*берем файл для обработки*/
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss( /*указываем плагин postcss*/
			[prefix({browsers:[ /*указываем поддерживаемые браузеры*/
				"last 1 version",
 				"last 2 Chrome versions",
 				"last 2 Firefox versions",
 				"last 2 Opera versions",
 				"last 2 Edge versions" ]})
			]))
		.pipe(gulp.dest('css')) /*складываем файл после обработки в папку*/
		.pipe(server.stream());
});

gulp.task('sync', ['style'], function() {
	server.init({
		server: ".", /*стартует из корня*/
		notify: false, /*убираем оповещения*/
    open: true,
    ui: false
	});

	gulp.watch("less/**/*.less", ['style']);
	gulp.watch("*.html").on("change", server.reload); /*следим за обновлениями html*/
});