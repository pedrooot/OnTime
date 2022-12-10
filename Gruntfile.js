module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    exec:{
      jest: 'jest test/*.js'
    }
})

grunt.registerTask('test','execute test', ['exec']);
  grunt.registerTask("check", "check code", function () {
    "node --check src/*.js";
  });



};