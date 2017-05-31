/*
	Optimise images in /src/
	----------------------------------- */

	module.exports = function(paths, gulp, plugins) {

		// Child modules
		var pngquant = require('imagemin-pngquant');

		// Return module
		return function() {

			var options = {
				progressive: true,
				use: [pngquant()]
			};

			return gulp.src(plugins.path.resolve(paths.src, 'static/images/{,**/}*.{png,jpg,gif}'))
				.pipe(plugins.imagemin(options))
				.pipe(gulp.dest(plugins.path.resolve(paths.src, 'static/images')));
		};
	};
