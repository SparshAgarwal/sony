define("sony/routes/home", ["exports", "ember"], function (exports, _ember) {

  var data;

  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      if (data != null) {
        return _ember["default"].$.getJSON(data);
      }
      //return Ember.$.getJSON('https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=star');
    },
    actions: {
      search: function search(parameter) {
        //data = "https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query="+parameter;
        data = _ember["default"].$.getJSON("https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=star");
      }
    }
  });
});