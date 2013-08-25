requirejs.config({
  baseUrl: 'scripts',
  paths: {
    engine: '../web-engine/scripts/',
    dummy: '../web-engine/scripts/modules/dummy',
    jquery: '../web-engine/vendor/scripts/jquery-1.10.2',
    backbone: '../web-engine/vendor/scripts/backbone-1.0.0',
    chaplin: '../web-engine/vendor/scripts/chaplin-0.10.0',
    underscore: '../web-engine/vendor/scripts/underscore-1.5.1',
  },
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: function (jq) {
        window.jQuery = this.$;
      }
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});