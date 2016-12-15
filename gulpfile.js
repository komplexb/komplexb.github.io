var paths;

paths = {
  sprites: {
    source: "assets/img/svg",
    build: "_includes/svg"
  }, 
  css: {
    source: "_site/assets/css/all.css",
    build: "_site/assets/css/"
  }
};

var gulp        = require('gulp');
var browserSync = require('browser-sync');
//var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var ghpages 	= require('gh-pages');
var path 		= require('path');
var svgSprite 	= require('gulp-svg-sprite');
var Notification = require('node-notifier');
var plugins 	= require('gulp-load-plugins')();
var rename      = require("gulp-rename");

var errorHandler = function(e) {
  var notifier;
  notifier = new Notification();
  notifier.notify({
    title: "Gulp Error",
    message: e.message
  });
  return this.emit("end");
};

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['build-sequence'], function () {
    browserSync.reload();
});

/**
 * Wait for build-sequence, then launch the Server
 */
gulp.task('browser-sync', ['build-sequence'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }, 
        open: false, 
		port: 4000, 
		xip: true, 
		logSnippet: true
    });
});

/**
 * Build Sequence
 * - sprites MUST be placed in includes directory BEFORE jekyll builds
 * - autoprefixer MUST run AFTER jekyll builds so that it acts on the most recent css file
 */
gulp.task('build-sequence', ['sprites', 'jekyll-build', 'autoprefixer']);


/**
 * Autoprefixer
 */
gulp.task('autoprefixer', function () {
    return gulp.src(paths.css.source)
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {
            path.basename += ".dist";
        }))
        .pipe(gulp.dest(paths.css.build));
});

/**
 * SVG Sprites
 */
gulp.task("sprites", function () {
    var config = {
		mode: {
			symbol: {
				dest: "",
				sprite: "sprite.html",
				inline: true,
				example: false
			}
		}
	}
	return gulp.src(paths.sprites.source + "/**/*.svg")
	.pipe(svgSprite(config))
	.on('error', errorHandler)
	.pipe(plugins.extReplace(".html")).pipe(gulp.dest(paths.sprites.build));
});


/**
 * Default task
 */
gulp.task('default', function() {
  gulp.start(['sprites', 'browser-sync']);
  gulp.watch(['assets/img/**/*.{jpg,png,gif}', 'index.html', '{work,ux}/**/*.{md,html}', '_data/*.yml', '_includes/ux/**/*.html', '_layouts/*.html', '_posts/*', 'assets/css/**/*.{scss,sass}', 'assets/js/**/*'], ['jekyll-rebuild']);
  gulp.watch(paths.sprites.source + "/**/*.svg", ['sprites']);
  gulp.watch(['_site/assets/css/all.css'], ['autoprefixer']);
});


gulp.task("deploy", ["build-sequence"], function () {
	ghpages.publish(path.join(__dirname, '_site'), {
		branch: 'master'
	}, function(err) {});
});