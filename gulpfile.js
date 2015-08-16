var paths;

paths = {
  sprites: {
    source: "svg",
    build: "_includes/svg"
  }, 
  css: {
    source: "_site/assets/css/all.css",
    build: "_site/assets/css/"
  }
};

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
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
gulp.task('jekyll-rebuild', ['jekyll-build', 'autoprefixer'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build', 'autoprefixer'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }, 
        open: false, 
		port: 4000, 
		xip: true, 
//		tunnel: "byronbuckley", 
		logSnippet: true
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
			onError: sass.logError // onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

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
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', function() {
  gulp.start(['sprites', 'browser-sync']);
  gulp.watch(['index.html', 'work/**/*.md', '_includes/*.html', '_layouts/*.html', '_posts/*', 'assets/css/**/*.{scss,sass}', 'assets/js/**/*'], ['jekyll-rebuild']);
  gulp.watch(paths.sprites.source + "/**/*.svg", ['sprites']);
  gulp.watch(['_site/assets/css/all.css'], ['autoprefixer']);
});


//gulp.task("deploy", ["jekyll-build"], function () {
gulp.task("deploy", function () {
	ghpages.publish(path.join(__dirname, '_site'), {
		branch: 'master'
	}, function(err) {});
});