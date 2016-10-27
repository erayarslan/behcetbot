module.exports = function (data) {
  var chatId = data.chat.id;

  if (data.text.indexOf("sie") != -1 || data.text.indexOf("aq") != -1) {
    $bot.send(chatId, "küfür etme aq evladı, botuz şurda");
  } else if (data.chat.type === "private" && $cache.privateFirst.indexOf(userId) == -1) {
    $bot.send(chatId, "beybi özelden mi konuşcaz wuu :)");
    $cache.privateFirst.push(userId);
  } else if (data.chat.type === "group" && $cache.groupFirst.indexOf(userId) == -1) {
    $bot.send(chatId, "şimdi milletin içinde knşmylm böyle ;) özele gel");
    $cache.groupFirst.push(userId);
  }
};
