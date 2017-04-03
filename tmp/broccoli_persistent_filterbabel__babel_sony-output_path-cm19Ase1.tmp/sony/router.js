define('sony/router', ['exports', 'ember', 'sony/config/environment'], function (exports, _ember, _sonyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _sonyConfigEnvironment['default'].locationType,
    rootURL: _sonyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home');
  });

  exports['default'] = Router;
});