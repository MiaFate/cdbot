const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('devuelve info del server'),
	async execute(interaction, client) {
		// manda un mensaje con una lista de los miembros con el rol bot

		const bots = interaction.guild.roles.cache.get('977286402398093352').members.map(member => member.id);
		// await interaction.reply({ content: `Bots: \n${bots}`, ephemeral: true });

		// const msjs = client.channels.cache.get('937872025765163010').messages.cache.filter(m => m.author.id === '301912930931441665');
		// const last = client.users.cache;

		const canal = client.channels.cache.get('937872025765163010');
		// const msjs = await canal.messages.fetch().then(m => m.filter(ms => ms.author.id === '308730556512993280'));
		const msjs = await canal.messages.fetch();
		const msjsFilt = msjs.filter(ms => bots.map(bot => ms.author.id === bot && ms.createdTimestamp < 1653083121752));
		// ms => bots.map(bot => ms.author.id === bot && ms.createdTimestamp > 1653082805)
		// 1653083121752
		// const last = msjsFilt.last();
		console.log(msjsFilt);
		// const contenido = msjs.map(msj => msj.content);


		await interaction.reply({ content: `Bots: \n${msjs, bots}`, ephemeral: true });
		// await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount} role bot: ${lista}`);
	},
};