module.exports = function(grunt) {

	grunt.initConfig({
		
	   	clean: ["dist"],

	    requirejs: {
		  compile: {
		    options: {
		      baseUrl: "src/js",
		      mainConfigFile: "src/js/config.js",
		      name: "app", 
		      out: "dist/js/app.min.js",
		      include: 'require.js'
		    }
		  }
		},

	    sass: {
		    prod: {
				options: {
		            outputStyle: 'compressed',
		            sourceMap: false			
				},
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.scss'],
					dest: 'dist/css',
					ext: '.css'
				}]
			}
		},

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['src/index.html']
				}
			}
		}

	});

    grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-requirejs');
  	grunt.loadNpmTasks('grunt-sass');
  	grunt.loadNpmTasks('grunt-processhtml');

  	grunt.registerTask('default', ['clean', 'processhtml', 'requirejs', 'sass']);
}