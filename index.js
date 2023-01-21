// const app =require('http')
require('dotenv').config()
const { response } = require('express')
const express =require('express')
const cors=require('cors')
const Note = require('./models/note')

const app=express();
app.use(cors())


app.get('/',(req,res)=>{
    res.send('<h1>FFFFF</h1>')
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const note = notes.find(note => note.id === id)
    if(note){
        console.log(note)
        response.json(note)
    }
    else{
        response.status(404).end()
    }
   
  })
app.delete('/api/notes/:id',(req,res)=>{
   
    const id = Number(req.params.id)
   notes=notes.filter(note=>note.id!==id)
   res.send('Delete request to homepage')
    return res.status(204).end()
})
app.post('/api/notes',(req,res)=>{
  const body=req.body
  const generateId =()=>{
    const maxId = notes.length > 0
    ?Math.max(...notes.map(n=>n.id))
    :0
  return maxId + 1
  }
  if(!body.content){
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const note={
    content: body.content,
    important:body.important || false,
    date: new Date(),
    id: generateId()
  }

  notes = notes.concat(note)
  console.log(note)
  res.json(note)
})
app.get('/api/notes',(req,res)=>{
  Note.find({}).then(notes=>{
    res.json(notes)
  })
  
})
const PORT =3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)