module.exports = function(grunt) {

  //Configure Project Settings
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //=========== Plugin List ==========//

    //Watch
    watch : {
      sass: {
        files: ['public/assets/style/scss/*.scss','public/assets/style/scss/globals/*.scss','public/assets/style/scss/components/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      uglify: {
        files: ['public/assets/scripts/main.js'],
        tasks: ['uglify']
      }
    },

    //Sass Compiler
    sass: {
      dist: {
        files: {
          'public/assets/style/css/style.css': 'public/assets/style/scss/style.scss'
        }
      }
    },

    //JS Minify
    uglify: {
      dist: {
        files: {
          'public/assets/scripts/main.min.js': ['public/assets/scripts/main.js']
        }
      }
    },

    //CSS Minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/assets/style/css',
          src: ['*.css', '!*.min.css'],
          dest: 'public/assets/style/css',
          ext: '.min.css'
        }]
      }
    }

  });

  //=========== Load / Do ==========//

  //Load Plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Do Tasks
  grunt.registerTask('default', ['watch']);

};
