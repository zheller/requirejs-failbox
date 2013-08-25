module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      options: {
        port: 9001,
        keepalive: true
      },
      dev: {
        options: {
          base: 'static'
        }
      },
      bad: {
        options: {
          base: 'buildBad'
        }
      },
      map: {
        options: {
          base: 'buildMap'
        }
      },
      slash: {
        options: {
          base: 'buildSlash'
        }
      }
    },

    jshint: {
      options: {
        indent: 2,
        white: true,
      },
      test: {
        options: {
          '-W030': true,
        },
        src: ['test/**/*.js']
      },
      app: {
        options: {
          // This is currently just a sandbox
          // for trying shit
          ignores: ['server.js']
        },
        src: ["static/scripts/**/*.js",
              "static/web-engine/modules/*.js",
              "static/web-engine/scripts/**/*.js"]
      },
    },

    karma: {
      options: {
        files: [
          'test/unit.js',
          { pattern: 'test/**/*.js', included: false },
          { pattern: 'vendor/**/*.js', included: false },
          { pattern: 'static/**/*.js', included: false },
        ],
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'requirejs'],
        plugins: [
          'karma-mocha',
          'karma-requirejs',
          'karma-phantomjs-launcher',
        ]
      },
      unit: {
        options: {
          singleRun: true
        }
      },
      watch: {
        options: {
          autoWatch: true
        }
      }
    },

    requirejs: {
      options: {
        optimize: 'none',
        appDir: 'static',
        preserveLicenseComments: false,
        generateSourceMaps: false,
        removeCombined: true,
        pragmasOnSave: {
          excludeJade: true
        },
        modules: [
          {
            name: 'modules/vendor',
          },
          {
            name: 'engine/modules/dummy',
          },
          {
            name: 'app',
            include: ['engine/modules/dummy']
          },
        ]
      },
      bad: {
        options:{
          dir: 'buildBad',
          mainConfigFile: 'static/scripts/configBad.js'
        }
      },
      map: {
        options: {
          dir: 'buildMap',
          mainConfigFile: 'static/scripts/configMap.js'
        }
      },
      slash: {
        options: {
          dir: "buildSlash",
          mainConfigFile: 'static/scripts/configSlash.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

};