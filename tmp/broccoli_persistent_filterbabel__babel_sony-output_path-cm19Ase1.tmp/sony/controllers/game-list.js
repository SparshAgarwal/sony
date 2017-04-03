define('sony/controllers/game-list', ['exports', 'ember'], function (exports, _ember) {
    var Controller = _ember['default'].Controller;

    var data;

    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            change: function change(url) {
                data = _ember['default'].$.getJSON(url);
                var model = this.get('model');
                model.set('_total', data._total);
                model.set('_links', data._links);
                model.set('streams', data.streams);
            }
        }
    });
});