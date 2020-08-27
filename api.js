
const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/TodoFullStack', { useNewUrlParser: true, useUnifiedTopology: true });
const toDoType = mongoose.model("toDo", {
    name: 'string',
    id: 'number',
    createAt: 'string',
    todo: 'boolean'
})

app.post('/todo', async (req, res) => {
    const newToDo = new Schema();
    newToDo.add({ name: 'string', id: 'number', createAt: 'string', todo: 'boolean' });


    res.send()
})

app.listen(3000, () => {
    console.log('vous êtes bien connectés à 3000');
})