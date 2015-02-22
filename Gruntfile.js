

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        'mocha-chai-sinon': {
            build: {
                src: ['src/**/*.js', './spec/**/*.js'],
                options: {
                    ui: 'bdd',
                    reporter: 'spec',
                    quiet: false
                }
            }

        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', ['mocha-chai-sinon']);

    grunt.registerTask('default', ['test']);

}
