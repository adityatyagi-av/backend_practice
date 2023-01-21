// const app =require('http')
require('dotenv').config()
const { response } = require('express')
const express =require('express')
const cors=require('cors')
const Note = require('./models/note')
const app=express();


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.json())
app.use(requestLogger)
app.use(cors())

app.use(express.static('build'))

app.get('/',(req,res)=>{
    res.send('<h1>FFFFF</h1>')
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
  })
app.delete('/api/notes/:id',(req,res)=>{
   
    const id = Number(req.params.id)
   notes=notes.filter(note=>note.id!==id)
   res.send('Delete request to homepage')
    return res.status(204).end()
})
app.post('/api/notes',(req,res)=>{
  const body=req.body
  
  if(body.content===undefined){
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const note=new Note({
    content: body.content,
    important:body.important || false,
  
  })

  note.save().then(savedNote=>{
    res.json(savedNote)
  })
})
app.get('/api/notes',(req,res)=>{
  Note.find({}).then(notes=>{
    res.json(notes)
  })
  
})
const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)