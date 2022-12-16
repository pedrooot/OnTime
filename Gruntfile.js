module.exports = function (grunt) 
{
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    connect: {
      server: {
          options: {
              base: "",
              port: 8080
          }
      }
    },
    watch: {},
    exec:{
      jest: 'jest test/*.js'
    }
  })

  grunt.loadNpmTasks( "grunt-contrib-connect" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.registerTask( "dev", [ "connect", "watch" ] );
  grunt.registerTask('test','execute test', ['exec']);
  grunt.registerTask("check", "check code", function () {
    "node --check src/*.js";
  });

};