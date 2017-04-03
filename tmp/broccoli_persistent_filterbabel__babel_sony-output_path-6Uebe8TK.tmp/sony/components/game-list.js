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