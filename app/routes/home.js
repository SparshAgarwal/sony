import Ember from 'ember';

var requrl = null;

export default Ember.Route.extend({
	model(){
		// return model;
		return Ember.$.getJSON('https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=starcraft');
	},   
	actions: {
		search: function(parameter) {
			var self=this;
			requrl = ('https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=').concat(parameter);
			Ember.$.getJSON(requrl, function(result) {
				Ember.set(result,'page', 1);
				Ember.set(result,'_totalpages',Math.ceil(result._total/5));
				self.set('model', result);
			});			
		}
	}
});