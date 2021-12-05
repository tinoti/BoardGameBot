const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require("cors")

const connectionString = 'mongodb+srv://Tino:BOs6WNNlKT7VfgDW@cluster0.hkrpc.mongodb.net/BoardGameDatabase?retryWrites=true&w=majority'

const app = express()

require('express-async-errors')

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + '/dist/front'));

app.post('/post-users', async (req, res) => {


  const { usersArray } = req.body
  await mongoose.connect(connectionString)
  var doc1 = new Model({ usersArray: usersArray })
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

  res.status(200).json(users[0].usersArray)
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
  usersArray: []
});

const Model = mongoose.model("user", schema, "usersArray");
