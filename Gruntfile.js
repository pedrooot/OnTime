//Template tomado de https://gruntjs.com/sample-gruntfile

const { default: nodeTest } = require("node:test");

//WIP
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    check: {
      build: {
        src: ["src/**/*.js"],
        dest: "dist/<%= pkg.name %>.js",
      },
    },
    log: {
      foo: [1, 2, 3],
      bar: "Welcome to tutorialspoint",
      sap: true,
    },
  });
  grunt.registerTask("check", "check code", function () {
    "node --check src/*.js";
  });
  grunt.registerMultiTask("log", "Log stuff.", function () {
    grunt.log.writeln(this.target + ": " + this.data);
  });
};
