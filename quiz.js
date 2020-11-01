// start of getting a question
               case "/question":
                    return

                    var readyhalloweenwuiz = require('fs')
                    let sdgsdgsd = message.guild.channels.find(c => c.name == "halloween-" + message.author.id && c.type == "text");
                    if (message.channel.name.startsWith("halloween")) { // if user ran the command in the quiz channel, it does nothing as nothing is needed right now



                    }else{
                         const wrongchanneldumbass = new Discord.RichEmbed()
                         .setAuthor("You cannot run this command in this channel.", message.author.avatarURL)
                         .setDescription("Please run this in your event channel. To make one, please say /halloweenevent.")
                         .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
                         .setThumbnail(message.guild.iconURL)
                         .setTimestamp()
                         .setFooter("Buy NotJimbo's Generator | The #1 generator", message.guild.iconURL)
                         message.channel.send(wrongchanneldumbass)
                         return
// if it isnt in a quiz, stops and says they cant do it here

                    }

                    readyhalloweenwuiz.readFile('./halloweenquestions/totalscore/' + message.author.id + ".txt", function read(err, dat436a) { // reads the file that the score will be held in
                         if (readyhalloweenwuiz.existsSync('./halloweenquestions/totalscore/' + message.author.id + ".txt")) { // if the user has a score file, it does the bellw
                         

                    if(dat436a.toString() === "7") { // if user has a score file AND it says 7, it does the following



          

                         const congratulations = new Discord.RichEmbed()
                         .setAuthor("Congratulations!", message.author.avatarURL)
                         .setDescription("You got 7 questions correctly! Well done on completing the quiz! To get your 25 second cooldown until November, open a #support ticket. You can now do task 2, it has automatically started. To see what it is, say /halloweenevent.")
                         .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
                         .setThumbnail(message.guild.iconURL)
                         .setTimestamp()
                         .setFooter("Buy NotJimbo's Generator | The #1 generator", message.guild.iconURL)
                         message.channel.send(congratulations)

                         
                         readyhalloweenwuiz.appendFile('./halloweenquestions/completed/' + message.author.id + ".txt", "User has now completed Task 1.", function a(err) { // creates the file to let us know they have completed it. when they start this, it checks if this exists.
                              if (err) throw err;
                             }) 
                             return
                         }
                    
                         return
                    }else{

                    }
               })

               if (readyhalloweenwuiz.existsSync('./halloweenquestions/completed/' + message.author.id + ".txt")) { // if user has completed the quiz, do nothing
                    return

               }



                    const alreadyintheeventbro = new Discord.RichEmbed()
                    .setAuthor("You're already in the quiz!", message.author.avatarURL)
                    .setDescription("You are currently in a question. To end your current quiz and restart, say /deletequiz.")
                    .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setFooter("Buy NotJimbo's Generator | The #1 generator", message.guild.iconURL)

                         if (readyhalloweenwuiz.existsSync('./halloweenquestions/ready/' + message.author.id + ".txt")) return message.channel.send(alreadyintheeventbro) // when the user runs /question, it temporaily makes a ready file so they cant say /question to get a new one

                         
                         var filestopickfrom = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", "question11", "question12", "question13", "question14", "question15", "question16", "question17", "question18" ] 
var filestopickfrom2 = Math.floor(Math.random() * filestopickfrom.length); // picks. random questiok out of those 18


readyhalloweenwuiz.readFile('./halloweenquestions/' + filestopickfrom[filestopickfrom2], function read(err, dat5a) {
     if (err) { // it reads the file that it randomly picked
       
     }

     readyhalloweenwuiz.appendFile('./halloweenquestions/ready/' + message.author.id + ".txt", "User has now entered.", function a(err) { // creates temp ready file so they cant get a new one
          if (err) throw err;
         }) 
     
         if (readyhalloweenwuiz.existsSync('./halloweenquestions/totalscore/' + message.author.id + ".txt")) { // checks if user has a total score file, if not itll make them one

         }else{

          readyhalloweenwuiz.appendFile('./halloweenquestions/totalscore/' + message.author.id + ".txt", "0", function a(err) { // makes total score file starting at 0
               if (err) throw err;
              }) 
         }





readyhalloweenwuiz.readFile('./halloweenquestions/answers/' + filestopickfrom[filestopickfrom2] + "answer", function read(err, data2235235) { // reads the answer for the random question it picked

     var datafromtag325 = dat5a.toString().split("\n");
     var textfromta43g = datafromtag325.join("\n") 




          const yourquestionis = new Discord.RichEmbed()
.setAuthor(textfromta43g, message.author.avatarURL)
.setDescription("Please say your answer after this message. Do not include any symbols such as - , . @ = / and many others. Do not use any **capital** letters, make sure it's all lower-case. ")
.setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
.setThumbnail(message.guild.iconURL)
.setTimestamp()
.setFooter("Buy NotJimbo's Generator | The #1 generator", message.guild.iconURL)
message.channel.send(yourquestionis)

const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id,);
        console.log(collector)
        collector.on('collect', message => { // waits for a message to be sent after command is ran

          var datafromtag325364 = data2235235.toString() 
          datafromtag325364 = datafromtag325364.toLowerCase()

            if (message.content.includes(datafromtag325364)) { // if the message sent includes the answer do the following

               readyhalloweenwuiz.readFile('./halloweenquestions/totalscore/' + message.author.id + ".txt", function read(err, data) { // reads total score file

                    var pointsfromfile = data.toString().split("\n");
                    var allpointsfromfile = pointsfromfile.join("\n") 
                    pointstogive2 = Number(allpointsfromfile) +Number(1) // gets the current amount of points in the score file and adds 1 to it

                    readyhalloweenwuiz.unlinkSync('./halloweenquestions/totalscore/' + message.author.id + ".txt")
          setTimeout(function(){ // deletes total score file to be able to update it

               readyhalloweenwuiz.appendFile('./halloweenquestions/totalscore/' + message.author.id + ".txt", pointstogive2, function a(err) { // creates new score file with the new score


               })

          }, 500);
          setTimeout(function(){
          
     }, 500);

               const thatwascorrect = new Discord.RichEmbed()
               .setAuthor("Good job!", message.author.avatarURL)
               .setDescription("You got the question correct! To get your next question, say /question. Your current score is:`" + pointstogive2 + "/7`.")
               .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
               .setThumbnail(message.guild.iconURL)
               .setTimestamp()
               .setFooter("Buy NotJimbo's Generator | The #1 generator", message.guild.iconURL)
               message.channel.send(thatwascorrect)
               collector.stop() // stops waiting for new messages

               setTimeout(function(){  // waits 0.5 seconds before doing the followibg
                   
                    readyhalloweenwuiz.unlinkSync('./halloweenquestions/ready/' + message.author.id + ".txt") // deletes the temp file
                }, 500)

               const halloweenquizquestion = new Discord.RichEmbed()
               .setAuthor("Correct Halloween Answer 🎃 | " + message.author.username, message.author.avatarURL, "https://profiles.pw/profile/" + message.author.id)
             .setDescription("**Username:** " + message.author.tag + "\n**User ID:** " + message.author.id + "\n\n**Question user got correct:** " + textfromta43g + "**\n**Users score now:** " + pointstogive2 + "/7**")
                                                   .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
             .setTimestamp()
             .setThumbnail(message.guild.iconURL)
             .setFooter('User Warned', message.author.avatarURL);
             client.channels.get("767146532939497512").send(halloweenquizquestion) // sends a log of the user getting the correct answer 
          })
               
            } else{

               const youhavefailed = new Discord.RichEmbed()
               .setAuthor("That was the wrong answer!", message.author.avatarURL)
               .setDescription("You have failed the quiz. This channel will now be deleted in **10** seconds and you will have to restart from the start.")
               .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
               .setThumbnail(message.guild.iconURL)
               .setTimestamp()
               .setFooter("Buy NotJimbo's Generator | The #1 generator", message.guild.iconURL)
               message.channel.send(youhavefailed)
               readyhalloweenwuiz.unlinkSync('./halloweenquestions/totalscore/' + message.author.id + ".txt")// deletes the users total score, resetting them
               collector.stop() // stops waiting for new messages

               const halloweenquizquestionincorrecy = new Discord.RichEmbed()
               .setAuthor("Incorrect Halloween Answer 🎃 | " + message.author.username, message.author.avatarURL, "https://profiles.pw/profile/" + message.author.id)
             .setDescription("**Username:** " + message.author.tag + "\n**User ID:** " + message.author.id + "\n\n**Question user got wrong:** " + textfromta43g + "\n**Their answer:** " + message.content)
                                                   .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
             .setTimestamp()
             .setThumbnail(message.guild.iconURL)
             .setFooter('User Warned', message.author.avatarURL);
             client.channels.get("767146532939497512").send(halloweenquizquestionincorrecy)// sends log of user getting the question wrong


               setTimeout(function(){ // waits 10 seconds before doing the following
                    message.channel.delete() // deletes the channel
                    readyhalloweenwuiz.unlinkSync('./halloweenquestions/ready/' + message.author.id + ".txt") // deletes the temp ready file
                }, 10000)


               }
          
                
            
          })

     })

})
          



               // end of question command
              
