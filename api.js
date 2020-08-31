
const express = require('express')
const app = express()
const cors = require('cors')//???????????????????????????
const BodyParser = require('body-parser')
const mongoose = require('mongoose');
var Schema = mongoose.Schema; // to detirme all the types of our data


app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');  //????????
    next();
  });
 const myschema = new Schema({
    name: String,
    id: Number,
    createdAt: String,
    todo: Boolean
  });

mongoose.connect('mongodb://localhost:27017/TodoFullStack', { useNewUrlParser: true, useUnifiedTopology: true });
const toDoType = mongoose.model("toDos", myschema )// we pass the name of our collection and the type of data

app.post('/todo', async (req, res) => {
    try {
        var newToDo = toDoType(req.body)
        var result = await newToDo.save()
        res.send(result)
    } catch (err) {
        res.send(err)
    }

});

app.get('/todo', async (req, res) => {
    try {
        var result = await toDoType.find().exec();
        res.send(result)
    } catch (err) {
        res.send(err)
    }
});
app.get('/todo/:id', async (req, res) => {
    try {
        var myToDo = await toDoType.findById(req.params.id).exec();
        res.send(myToDo)
    } catch (err) {
        res.send(err)
    }
});

app.put('/todo/:name', async (req, res) => {
    try{
        var updateToDo = await toDoType.findOne({name: req.params.name})
        updateToDo.todo = !updateToDo.todo
       
        var result = await updateToDo.save();
        res.send(result)

    }catch(err){
        console.log(err);
        res.send(err)
    }

})
app.delete('/todo/:name', async (req, res) =>{
    try{
        var taskToDelete = await toDoType.findOne({name: req.params.name})
        if(taskToDelete){
             await toDoType.deleteOne(taskToDelete)
         res.send("Successful deletion")
        }else{
            res.send(" Sorry it is not exsit")
        }
       
       
    }catch(err){
        console.log(err);
        res.send(err)
    }
})
app.listen(3000, () => {
    console.log('vous êtes bien connectés à 3000');
})