var db = require(__dirname + "/db");

setTimeout(function () {
  $bot.sendAll("selam yalnızlık ben geldim xd", function () {
    console.log("[UP] nigga");
  });
}, 5000);

module.exports = function () {
  var f = arguments.callee;

  setTimeout(function () {
    $bot.sendAll(
      "nasılsın aşkııııım, napıyosun mesela",
      function () {
        console.log("[LOG]", "Broadcast Done.");
      });

    f();
  }, Math.floor((Math.random() * $config.end_sec) + $config.start_sec) * 1000);
};