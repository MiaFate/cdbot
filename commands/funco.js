const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('funco')
		.setDescription('did it works?'),
	async execute(interaction) {
		await interaction.reply('VAMAAAAAA!');
	},
};