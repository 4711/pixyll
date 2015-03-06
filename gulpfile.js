var gulp        = require('gulp');
var browserSync = require('browser-sync');
var shell       = require('gulp-shell');
var notify      = require('gulp-notify');


gulp.task('browser-sync', function() {

    browserSync({
        server: "./_site",
        files: "./_site/**",
    });
});

// Jekyll build
gulp.task('jekyll-build', function () {
	return gulp.src('')
	.pipe(shell(['jekyll build']))
	.pipe(browserSync.reload({ stream:true }))
	.pipe(notify({ message: 'Jekyll task done' }));
})


// Watch task
gulp.task('watch', ['browser-sync'], function () {
//	gulp.watch('./scss/**/*', ['css']);
//	gulp.watch('./js/modules/**/*', ['jslint', 'scripts']);
//	gulp.watch(['./_posts/**/*','./_projects/**/*'], ['bannerimage']);
	gulp.watch(['_includes/**/*','_layouts/**/*','./_posts/**/*','./_projects/**/*','./about/**/*','./blog/**/*','./contact/**/*','./work/**/*','index.html'], ['jekyll-build']);
});



// Tasks
//gulp.task('default', ['jekyll-build', 'browser-sync']);
gulp.task('default', ['jekyll-build', 'watch']);
