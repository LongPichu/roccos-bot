module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  run: async (bot, message, args) => {
   if(!message.member.roles.cache.some(role =>["Ranking Permissions"].includes(role.name))){
        return message.channel.send({embed: {
            color: 16733013,
            description: "You need the `Ranking Permissions` role to run this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }})
    }
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("That user could not be DMed!"))
      .then(() => message.channel.send(`Succesfully sent a message to ${user.user.tag}!`));
  },
};