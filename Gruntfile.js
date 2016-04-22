module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        imagemin: {
            static: {
                files: {
                    'dist/img/me.60x.min.jpg': 'src/img/me.60x.jpg',
                    'dist/img/about-me.100x.min.jpg': 'src/img/about-me.100x.jpg',
                    'dist/img/about-me.500x.min.jpg': 'src/img/about-me.500x.jpg',
                    'dist/img/online-resume.100x.min.jpg': 'src/img/online-resume.100x.jpg',
                    'dist/img/online-resume.500x.min.jpg': 'src/img/online-resume.500x.jpg',
                    'dist/img/arcade-game.100x.min.jpg': 'src/img/arcade-game.100x.jpg',
                    'dist/img/arcade-game.500x.min.jpg': 'src/img/arcade-game.500x.jpg',
                    'dist/img/pizzeria2.100x.min.jpg': 'src/img/pizzeria2.100x.jpg',
                    'dist/views/images/pizza.232x.min.png': 'src/views/images/pizza.232x.png',
                    'dist/views/images/pizzeria.360x.min.jpg': 'src/views/images/pizzeria.360x.jpg'
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/print.min.css': ['src/css/print.css'],
                    'dist/css/style.min.css': ['src/css/style.css'],
                    'dist/views/css/bootstrap-grid.min.css': ['src/views/css/bootstrap-grid.css'],
                    'dist/views/css/style.min.css': ['src/views/css/style.css']
               }
            }
        },       

        jshint: {
            globalstrict: true,
            options: {
                reporterOutput: 'jshint.log'
            },
            all: ['Gruntfile.js', 'src/js/perfmatters.js', 'src/views/js/main.js']
        },

        uglify: {
            my_target: {
                files: {
                    // 'dist/js/my_pgm.min.js': ['src/js/*.js']
                    'dist/js/perfmatters.min.js': ['src/js/perfmatters.js'],
                    'dist/views/js/main.min.js': ['src/views/js/main.js']
                }
            }
        },       

        copy: {
            target: {
                files: [
                    {src: ['src/index.html'], dest: 'dist/index.html'},
                    {src: ['src/project-about-me.html'], dest: 'dist/project-about-me.html'},
                    {src: ['src/project-arcade-game.html'], dest: 'dist/project-arcade-game.html'},
                    {src: ['src/project-online-resume.html'], dest: 'dist/project-online-resume.html'},
                    {src: ['src/views/pizza.html'], dest: 'dist/views/pizza.html'}
               ]
            }
        }       

    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['imagemin', 'cssmin', 'uglify', 'copy']);
};
