module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            options: {
                reporterOutput: 'jshint.log'
            },
            all: ['Gruntfile.js', 'src/js/*.js']
        },

        uglify: {
            options: {
                banner: '/*! grunt uglify <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    // 'dist/js/my_pgm.min.js': ['src/js/*.js']
                    'dist/js/my_pgm1.min.js': ['src/js/my_pgm1.js'],
                    'dist/js/my_pgm2.min.js': ['src/js/my_pgm2.js']
                }
            }
        },       

        imagemin: {
            static: {
                files: {
                    'src/img/profilepic.min.jpg': 'src/img/profilepic.jpg',
                    'src/img/build-2048.min.jpg': 'src/img/build-2048.jpg',
                    'src/img/perf-opt.min.jpg': 'src/img/perf-opt.jpg',
                    'src/img/mobile-web-dev.min.jpg': 'src/img/mobile-web-dev.jpg',
                    'src/img/pizzeria2.min.jpg': 'src/img/pizzeria2.jpg'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
