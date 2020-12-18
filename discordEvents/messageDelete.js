import config from "../config.json";

export function MessageDelete(message) {
	console.log("messageDeleted");
	try {
		if (message.author.bot) return;
		if (message.channel.id == config.channels.raids) return;
		if (message.channel.id == config.channels.lfg) return;

		var channelDeleted = message.client.channels.cache.get(config.channels.deleted);
		channelDeleted.send("<@" + message.author.id + ">: " + message.content.split("@").join(""));
		for (var value of message.attachments.values()) {
			channelDeleted.send("Вложение:", { files: [value.proxyURL] });
		}
	} catch (e) {
		require('../catcherror').catcherror(e);
	}
}