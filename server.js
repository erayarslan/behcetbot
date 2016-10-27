var TelegramBot = require('node-telegram-bot-api');
var cmds = require(__dirname + "/cmd");
var ai = require(__dirname + "/ai");

global.$bot = new TelegramBot($config.token, {polling: true});

$bot.send = function (id, message, next) {
  var promise = $bot.sendMessage(id, message);
  promise
    .then(function (data) {
      next ? next(true) : void 0;
    })
    .catch(function (e) {
      console.log("[ERROR]", e.message);
      next ? next(false) : void 0;
    });
};

$bot.sendAll = function (message, next) {
  var loop = $db("users").size();

  if (!loop) {
    next();
  }

  $db("users").forEach(function (userId) {
    $bot.send(userId, message, function () {
      if (--loop == 0) {
        next();
      }
    })
  });
};

/**
 * @param data.from.id data.from
 */
$bot.on("message", function (data) {
  for (var key in cmds) {
    var cmd = cmds[key];
    if (cmd.m(data.text)) {
      cmd.f(data.from.id, data.chat.id, data.text);
      return;
    }
  }

  var userId = data.from.id;
  var user = $db("users").find(function (id) {
    return id === userId;
  });

  if (!user) {
    $bot.send(
      data.from.id,
      "şşşt çaktırma artık sevgilimsin :*",
      function (done) {
        if (done) {
          $db("users").push(userId);
        }
      });
  }

  ai(data);
});
