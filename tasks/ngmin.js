'use strict';

var ngmin = require('ngmin');

module.exports = function (grunt) {

  grunt.registerMultiTask('ngmin', 'Annotate AngularJS scripts for minification', function () {

    grunt.log.writeln('ngminifying ' + grunt.log.wordlist(this.files.map(function (file) {
      return file.src;
    })));

    this.files.forEach(function (file) {
      file.src.forEach(function (file) {
        var content = grunt.file.read(file);
        content = ngmin.annotate(content);
        grunt.file.write(file, content);
      });
    });

  });
};
