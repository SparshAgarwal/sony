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