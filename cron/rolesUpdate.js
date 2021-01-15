import Discord from "discord.js";
import config from "../config.json";
import { SetRoles } from "../clan.js";
import { CatchError, FetchDefaultCatchErrorChannel } from "../catcherror.js";

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login(config.credentials.discordApiKey);

client.on("ready", () => {
    try {
        FetchDefaultCatchErrorChannel(client);
        var guild = client.guilds.cache.get(config.guilds.main);
        SetRoles(guild);
        setTimeout(() => {
            client.destroy();
            process.exit();
        }, 1200000);
    } catch (e) {
        CatchError(e);
    }
});