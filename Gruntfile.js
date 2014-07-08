module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      separator: ';',
      dist: {
        src: [
          'client/app/**/*.js'
        ],
        dest: 'client/index.js'
      }
    },
    uglify: {

    },
    watch: {
      scripts: {
        files: [
          'client/app/**/*.js',
        ],
        tasks: [
          'concat',
          'shell:prodServer'
        ]
      }
    },
    shell: {
      prodServer: {
        command: 'firebase deploy'
      }
    }


  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('public', ['shell:prodServer', 'watch']);

  grunt.registerTask('default',['watch'] );

};





