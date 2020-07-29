const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(`What kind of music do you like to listen ${name}?  ` , (music) => {
    rl.question(`What do you like to eat ${name}? ` , (food) => {
      rl.question(`When do you like to eat ${food} afternoons ?, evenings ? mornings ? `, (favourite) => {
        rl.question(`What sport do you like to play? ` , (sport) => {
          rl.question(`What is your superpower? ` , (superpower) => {
            rl.question(`Do you like coding ${name}? ` , (yesNo1) => {
              if (yesNo1 === "yes" || yesNo1 === "y" || yesNo1 === "yeah" || yesNo1 === "yessss" ) {
                rl.question(`what language do you like to write your program ${name}? ` , (language) => {
                  rl.question(`Is it hard to learn? ` , (yesNo2) => {
                    rl.question(`Can you teach it? ` , (teach) => {
                      if (teach === "yes" || teach === "y" || teach === "yeah" || teach === "yessss") {
                        rl.question(`Can you teach me ${language}? please say yessss ` , (teachme) => { 
                          if (teachme === "yes" || teachme === "y" || teachme === "yessss" || teachme === "yeah" || teachme === "why not") {
                            console.log(`Thank you for answering my questions ${name}, I will contact you for consultations to learn ${language}. We will have fun together and maybe eat ${food} together and write codes while listening to ${music}. We can also make out time to play ${sport}. Thank you for talking with me ${name} and do have a nice day!`); 
                          rl.close();
                          }
                          else {
                            console.log(`Thank you for answering my questions ${name}, it's ok if you don't want to teach ${language}. We can still have fun together and maybe eat ${food} together and you can write codes while listening to ${music}. We can also make out time to play ${sport}. Thank you for talking with me ${name} and do have a nice day!`);
                          rl.close();
                          }
                        })
                        
                      }
                      else {
                        console.log(`Thank you for answering my questions ${name},I hope you enjoy ${language}. We can still have fun together and maybe eat ${food} together and you can write codes while listening to ${music}. We can also make out time to play ${sport}. Thank you for talking with me ${name} and do have a nice day!`);
                        rl.close();
                      }
                    })
                  })
                }) 
              } 
              else {
                console.log(`Thank you for answering my questions ${name}. We can still have fun together and maybe eat ${food} together and you can write codes while listening to ${music}. We can also make out time to play ${sport}. Thank you for talking with me ${name} and do have a nice day!`)
              rl.close();
              }
            })
            
          })
        })
      })
    })
  })     
});

// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.