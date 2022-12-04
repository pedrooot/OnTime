module.exports = function (grunt) {
  grunt.registerTask("check", "check code", function () {
    "node --check src/*.js";
  });
  grunt.registerTask("test", "check code", function () {
    "jest ./test/busqueda.test.js";
  });
};