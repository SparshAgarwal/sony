"use strict";



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
define('sony/components/game-list', ['exports', 'ember'], function (exports, _ember) {

	var data;

	exports['default'] = _ember['default'].Component.extend({
		actions: {
			up: function up(url, page) {
				var self = this;
				var requrl = url.concat('&client_id=t171hp309vgcm3wxbqp801hscpjni4');
				_ember['default'].$.getJSON(requrl, function (result) {
					_ember['default'].set(result, 'page', page + 1);
					self.set('model', result);
				});
			},
			down: function down(url, page) {
				var self = this;
				var requrl = url.concat('&client_id=t171hp309vgcm3wxbqp801hscpjni4');
				_ember['default'].$.getJSON(requrl, function (result) {
					_ember['default'].set(result, 'page', page - 1);
					self.set('model', result);
				});
			}
		}
	});
});
define('sony/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('sony/helpers/app-version', ['exports', 'ember', 'sony/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _sonyConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _sonyConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('sony/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('sony/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('sony/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sony/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sonyConfigEnvironment) {
  var _config$APP = _sonyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('sony/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sony/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sony/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('sony/initializers/export-application-global', ['exports', 'ember', 'sony/config/environment'], function (exports, _ember, _sonyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_sonyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _sonyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_sonyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sony/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sony/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('sony/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("sony/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('sony/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('sony/routes/home', ['exports', 'ember'], function (exports, _ember) {

	var requrl = null;

	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			// return model;
			return _ember['default'].$.getJSON('https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=starcraft');
		},
		actions: {
			search: function search(parameter) {
				var self = this;
				requrl = 'https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query='.concat(parameter);
				_ember['default'].$.getJSON(requrl, function (result) {
					_ember['default'].set(result, 'page', 1);
					_ember['default'].set(result, '_totalpages', Math.ceil(result._total / 5));
					self.set('model', result);
				});
			}
		}
	});
});
define('sony/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("sony/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wLR9XPNZ", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sony/templates/application.hbs" } });
});
define("sony/templates/components/game-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ytSXxSz/", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"border-style:solid;border-width: 1px; width:80%; margin:auto;\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"width:60%;float:left;padding:2px;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Total results: \"],[\"append\",[\"unknown\",[\"model\",\"_total\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"width:35%;float:right;padding:2px;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"float:right;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"down\",[\"get\",[\"model\",\"_links\",\"prev\"]],[\"get\",[\"model\",\"page\"]]]],[\"flush-element\"],[\"text\",\"◂\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"append\",[\"unknown\",[\"model\",\"page\"]],false],[\"text\",\"/\"],[\"append\",[\"unknown\",[\"model\",\"_totalpages\"]],false],[\"text\",\" \\n\\t\\t\\t\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"up\",[\"get\",[\"model\",\"_links\",\"next\"]],[\"get\",[\"model\",\"page\"]]]],[\"flush-element\"],[\"text\",\"▸\"],[\"close-element\"],[\"text\",\" \\n\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"streams\"]]],null,0],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\t\\t\\t\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"cellspacing\",\"2\"],[\"static-attr\",\"cellpadding\",\"2\"],[\"static-attr\",\"border\",\"0\"],[\"static-attr\",\"class\",\"project_table\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"td\",[]],[\"static-attr\",\"style\",\"margin: 2px 0 0 0;float: left;\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"game\",\"preview\",\"small\"]]]]],[\"static-attr\",\"alt\",\"Stream preview image\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"margin: 0 15px 0 15px;font-size:18px;font-weight:bold;\"],[\"flush-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"game\",\"channel\",\"display_name\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"margin: 2px 15px 0 17px;font-size:12px\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"channel\",\"game\"]],false],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"game\",\"viewers\"]],false],[\"text\",\" viewers\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"margin: 0 15px 0 17px;font-size:12px\"],[\"flush-element\"],[\"text\",\"Strean description text text text\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"game\"]}],\"hasPartials\":false}", "meta": { "moduleName": "sony/templates/components/game-list.hbs" } });
});
define("sony/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KwQLYGXT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"border-style:solid;border-width: 1px; width:80%; height:100px; margin:auto;\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"margin:50px 0 0 20px;\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"name\",\"placeholder\",\"value\"],[\"search\",\"QuerySearch\",\"Search query...\",[\"get\",[\"parameter\"]]]]],false],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"search\",[\"get\",[\"parameter\"]]]],[\"flush-element\"],[\"text\",\"Search\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"game-list\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "sony/templates/home.hbs" } });
});


define('sony/config/environment', ['ember'], function(Ember) {
  var prefix = 'sony';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("sony/app")["default"].create({"name":"sony","version":"0.0.0+5ec578f7"});
}
//# sourceMappingURL=sony.map
