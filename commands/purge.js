const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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

  const deleteCount = parseInt(args[0], 10); //This will get the number of messages we want to delete as an integer.
  if (!deleteCount || deleteCount < 2 || deleteCount > 100) //This makes sure that the minimum amount of messages we can delete is 2, and the max is 100. You can change this if you want.
    return message.channel.send(
      "Please specify how many messages you would like to purge. (min 2, max 100)"
    );
  message.channel
    .bulkDelete(deleteCount) //This will delete the specified number of messages.
    .catch(error =>
      message.channel.send(`Couldn't purge messages because of, ${error}.`) //This will make the bot send a message if there is an error.
    );
};

module.exports.help = {
  name: "purge"
};