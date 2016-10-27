global.$db = require(__dirname + "/db");
global.$config = require(__dirname + "/config");
global.$cache = require(__dirname + "/cache");
require(__dirname + "/server");
require(__dirname + "/job")();
require(__dirname + "/err");