define('sony/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sony/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sonyConfigEnvironment) {
  var _config$APP = _sonyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});