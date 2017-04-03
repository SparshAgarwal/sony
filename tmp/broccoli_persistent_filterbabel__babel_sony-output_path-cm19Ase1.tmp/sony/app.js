define('sony/app', ['exports', 'ember', 'sony/resolver', 'ember-load-initializers', 'sony/config/environment'], function (exports, _ember, _sonyResolver, _emberLoadInitializers, _sonyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _sonyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sonyConfigEnvironment['default'].podModulePrefix,
    Resolver: _sonyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _sonyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});