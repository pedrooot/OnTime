module.exports = function (grunt) {
  grunt.registerTask("check", "check code", function () {
    "node --check src/*.js";
  });
};
