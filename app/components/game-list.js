import Ember from 'ember';

var data;

export default Ember.Component.extend({
	actions: {
		up(url,page) {
			var self = this;
			var requrl = url.concat('&client_id=t171hp309vgcm3wxbqp801hscpjni4');
			Ember.$.getJSON(requrl, function(result) {
				Ember.set(result,'page', page+1);
				self.set('model', result);
			});
		},
		down(url,page) {
			var self = this;
			var requrl = url.concat('&client_id=t171hp309vgcm3wxbqp801hscpjni4');
			Ember.$.getJSON(requrl, function(result) {
				Ember.set(result,'page', page-1);
				self.set('model', result);
			});
		}
	}
});