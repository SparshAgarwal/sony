import Ember from 'ember';

var data;

export default Ember.Component.extend({
	actions: {						// the two actions are for navigation arrows
		up(url,page) {				// the up action is for moving forward, it updates the stream list with next list. 
			var self = this;
			var requrl = url.concat('&client_id=t171hp309vgcm3wxbqp801hscpjni4');
			Ember.$.getJSON(requrl, function(result) {
				Ember.set(result,'page', page+1);			//page+1 updates the page number between the arrows.
				self.set('model', result);
			});
		},
		down(url,page) {			// the down action is for moving backwards, it updates the stream list with previous list. 
			var self = this;
			var requrl = url.concat('&client_id=t171hp309vgcm3wxbqp801hscpjni4');
			Ember.$.getJSON(requrl, function(result) {
				Ember.set(result,'page', page-1);
				self.set('model', result);
			});
		}
	}
});