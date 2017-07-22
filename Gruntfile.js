module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
        serve:{
            path:"C:/Users/이은지/Documents/port_innisfree",
            options:{
                port:8000
        }
    },

    less: {
        options: {
          paths: ['public/**/*.less']
        },
        files: {
          'public/css/innisfreestyle.css': 'public/less/import.less'
        }
      },

    watch: {
        lesswatch: {
            files: ['public/**/*.less'],
            tasks: ['less'],
            options: {
            spawn: false,
          },
        },
    },




  });



  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['serve']);






};
