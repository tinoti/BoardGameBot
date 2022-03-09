const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require("cors")
const TelegramBot = require('node-telegram-bot-api');


const connectionString = 'mongodb+srv://Tino:BOs6WNNlKT7VfgDW@cluster0.hkrpc.mongodb.net/BoardGameDatabase?retryWrites=true&w=majority'


const token = '5089146718:AAGyszE6hoJ8AWf4aj2gn9_rGUE72tdjCdo';
const bot = new TelegramBot(token, { polling: true });

const app = express()

require('express-async-errors')

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + '/dist/front'));

app.post('/post-users', async (req, res) => {

  const { usersArray, week } = req.body
  const availability = setAvailableUsers(usersArray)


  availability.forEach(day => {
    if (day.availableUsers.find(o => o === "Tino"
      && day.availableUsers.find(o => o === "Dario")
      && day.availableUsers.find(o => o === "Lovre")
      && day.availableUsers.find(o => o === "Ivan"))) {

      bot.sendMessage("-728448621", `Success! Svi mogu u ${day.dayName.toLowerCase()}`);

      console.log("DAN")
      console.log((day))
    }
  })

  await mongoose.connect(connectionString)
  var doc1 = new Model({ usersArray: usersArray, week: week })
  await Model.deleteMany({})
  const users = await doc1.save()

  await mongoose.connection.close()

  res.status(200).json(users.usersArray)
})

app.get('/get-users', async (req, res) => {
  await mongoose.connect(connectionString)
  const users = await Model.find({});
  console.log(users)

  await mongoose.connection.close()

  res.status(200).json(users[0])
})


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/front/index.html'));
});

app.use((error, req, res) => {
  console.log("GREŠKA")
  console.log(error)
})

app.listen(process.env.PORT || 8080);

const schema = mongoose.Schema({
  usersArray: [],
  week: 0
});

const Model = mongoose.model("user", schema, "usersArray");





// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  console.log(("OVDJE"))
  console.log(msg)
  const chatId = msg.chat.id;

  if (msg.text === "/link") {
    await bot.sendMessage(chatId, `https://boardgameschedule.herokuapp.com/`);
  }
  else if (msg.text === "/status") {
    await mongoose.connect(connectionString)
    const users = await Model.find({});
    console.log(users)

    await mongoose.connection.close()

    const availability = setAvailableUsers(users[0].usersArray)

    let count = 0

    availability.forEach(day => {
      if (day.availableUsers.find(o => o === "Tino"
        && day.availableUsers.find(o => o === "Dario")
        && day.availableUsers.find(o => o === "Lovre")
        && day.availableUsers.find(o => o === "Ivan"))) {

        count++
        bot.sendMessage(chatId, ` Svi mogu u ${day.dayName.toLowerCase()}`);
        console.log("DAN")
        console.log((day))
      }
    })

    if (count === 0) {
      await bot.sendMessage(chatId, ` Još nema dana kada svi mogu :(`);
    }


  }
  else if (msg.text === "/help") {
    await bot.sendMessage(chatId, `Available commands: \n /link - Link do aplikacije \n /status - Ima li matching dana ili ne`);
  }

});


const setAvailableUsers = (usersArray) => {
  const availability = [
    { dayName: 'Ponedjeljak', availableUsers: [] },
    { dayName: 'Utorak', availableUsers: [] },
    { dayName: 'Srijeda', availableUsers: [] },
    { dayName: 'Četvrtak', availableUsers: [] },
    { dayName: 'Petak', availableUsers: [] },
    { dayName: 'Subota', availableUsers: [] },
    { dayName: 'Nedjelja', availableUsers: [] }
  ]


  usersArray.forEach(user => {
    user.days.forEach(day => {
      if (day.availability == 1) {
        let dayObj = availability.find(o => o.dayName === day.name)
        dayObj.availableUsers.push(user.name)
      }
    })
  })

  return availability
}
