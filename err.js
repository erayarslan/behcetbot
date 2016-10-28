var exitHandler = function (options, err) {
  if (err) {
    console.error(err.stack);
  }

  if (options.exit) {
    $bot.sendAll("behçet kaçar :/ güncellemem lazım kendimi. sonrası için beni sev olur mu :'(", function () {
      process.exit();
    });
  }
};

process.on('exit', exitHandler.bind(null, {cleanup: true}));
process.on('SIGINT', exitHandler.bind(null, {exit: true}));
process.on('uncaughtException', exitHandler.bind(null, {exit: true}));
