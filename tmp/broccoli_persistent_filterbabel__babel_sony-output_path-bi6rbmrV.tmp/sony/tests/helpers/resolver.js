define('sony/tests/helpers/resolver', ['exports', 'sony/resolver', 'sony/config/environment'], function (exports, _sonyResolver, _sonyConfigEnvironment) {

  var resolver = _sonyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _sonyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sonyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});