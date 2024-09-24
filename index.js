//JotaroKujo0525 note, this is a deed that i should've done a long time ago
require('dotenv').config()

const DiscordMusicBot = require("./lib/DiscordMusicBot");
const { exec } = require("child_process");

if (process.env.REPL_ID) {
	console.log("Replit sistemi algılandı, özel başlatılıyor `unhandledRejection' olay dinleyicisi.")
	process.on('unhandledRejection', (reason, promise) => {
		promise.catch((err) => {
			if (err.status === 429) {
				console.log("Discord ağ geçidine bağlanmaya çalışırken bir şeyler ters gitti, Sıfırlama...");
				exec("kill 1");
			}
		});
	});
}

const client = new DiscordMusicBot();

console.log("Make sure Botu başlatmadan önce config.js doldurmak için.");

const getClient = () => client;

module.exports = {
	getClient,
};
