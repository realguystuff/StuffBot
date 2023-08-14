const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping me!'),
	async execute(interaction) {
		await interaction.reply(`Pong! 🏓 Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${interaction.client.ws.ping}ms`);
	},
};