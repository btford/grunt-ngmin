'use strict';

var ngmin = require('ngmin');

module.exports = function (grunt) {

  grunt.registerMultiTask('ngmin', 'Annotate AngularJS scripts for minification', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      banner: '',
      footer: ''
    });

    // Process banner and footer.
    var banner = grunt.template.process(options.banner);
    var footer = grunt.template.process(options.footer);

    grunt.log.writeln('ngminifying ' + grunt.log.wordlist(this.files.map(function (file) {
      return file.src;
    })));

    this.files.forEach(function (file) {
      var contents = banner + file.src
        .map(grunt.file.read)
        .map(ngmin.annotate)
        .join('') + footer;

      // Write the destination file.
      grunt.file.write(file.dest, contents);
    });

  });
};
