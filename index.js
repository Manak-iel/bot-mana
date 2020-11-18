const Discord = require("discord.js")
const client = new Discord.Client()
const config= require("./config.json") 
const functiontest = require(';/functiontest.js');
const prefix ="!"

client.login(config.token)

function fonctiontest (){
   return message.channel.send("coucou")
   }


client.on("ready", () => {
    console.log("connecté !")
    client.user.setStatus("online")
   // client.user.setActivity("vivre", {type: 1 })
})

client.on("message", function(message) { 
    if (message.author.bot) return;    
    if (message.channel.type == "dm") return;                       //si le message est ecrit par un bot return
    if (!message.content.startsWith(prefix)) return;         // si le prefixe n'est pas present au debu du message, return  

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase(); 

         if (command === "ping") {
           message.channel.send("pong");
           }

         if (command === "hello") {
            functiontest.functiontest(); ; 
           } 

         if (command === "map") {
            message.channel.send(":eyes:");
            } 

         if (command === "griffe") { 
            message.channel.send('item :', { files: ["D:\Projet Citadelle/test 2.png" ] }); 
           } 

     
    }

) 
