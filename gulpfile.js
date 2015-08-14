var paths;

paths = {
  sprites: {
    source: "svg",
    build: "_includes/svg"
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
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
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
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
//    gulp.watch('_scss/*.scss', ['sass']);
//    gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*', 'assets/css/**/*.{scss,sass}'], ['jekyll-rebuild']);
	gulp.watch(paths.sprites.source + "/**/*.svg", ['sprites']);
    gulp.watch(['index.html', 'work/**/*.md', '_includes/*.html', '_layouts/*.html', '_posts/*', 'assets/css/**/*.{scss,sass}'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
//gulp.task('default', ['browser-sync', 'watch']);

gulp.task('default', function() {
  gulp.start(['sprites', 'browser-sync']);
  gulp.watch(['index.html', 'work/**/*.md', '_includes/*.html', '_layouts/*.html', '_posts/*', 'assets/css/**/*.{scss,sass}'], ['jekyll-rebuild']);
  return gulp.watch(paths.sprites.source + "/**/*.svg", ['sprites']);
});


gulp.task("deploy", ["jekyll-build"], function () {
	ghpages.publish(path.join(__dirname, '_site'), {
		branch: 'master'
	}, function(err) {});
});