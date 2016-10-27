var request = require('request');

module.exports = {
  "random": {
    m: function (str) {
      return new RegExp("\/random (.+)").test(str);
    },
    f: function (user, chat, message) {
      var cmd = message.split(" ");
      if (cmd.length == 3) {
        var n = Math.floor((Math.random() * parseInt(cmd[2])) + parseInt(cmd[1]));
        $bot.send(chat, isNaN(n) ? "adam gibi random at amk, gavat" : n);
      }
    }
  },
  "dota": {
    m: function (str) {
      return str.startsWith("/dota");
    },
    f: function (user, chat, message) {
      request('https://www.reddit.com/r/DotA2/.json?&limit=1', function (e, res, body) {
        if (!e && res.statusCode == 200) {
          var json = JSON.parse(body).data.children;
          for (var i in json) {
            var data = json[i].data;
            if (!data.stickied) {
              $bot.send(chat, ("*" + data.title) + " @ " + data.url);
            }
          }
        }
      });
    }
  }
}
