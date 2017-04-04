import Ember from 'ember';

var requrl = null;

export default Ember.Route.extend({
	model(){
		// return model;
		return Ember.$.getJSON('https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=starcraft');
	},   
	actions: {		// the search action is for using the search parameter and compute the url to finally get the json data.
		search: function(parameter) {
			var self=this;
			requrl = ('https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=').concat(parameter);
			Ember.$.getJSON(requrl, function(result) {
				Ember.set(result,'page', 1);		//setup the base page number
				Ember.set(result,'_totalpages',Math.ceil(result._total/5));		//setup the total number of pages
				self.set('model', result);
			});			
		}
	}
});