define('sony/components/game-list', ['exports', 'ember'], function (exports, _ember) {

    var data;

    exports['default'] = _ember['default'].Component.extend({
        actions: {
            change: function change(url) {
                data = _ember['default'].$.getJSON(url);
                var model = this.get('model');
                model.set('_total', data._total);
                model.set('_links', data._links);
                model.set('streams', data.streams);
            }
        }

        /*
        	model(){
        		data = data + "&client_id=t171hp309vgcm3wxbqp801hscpjni4";
        		return Ember.$.getJSON(data);
            }*/

    });
});