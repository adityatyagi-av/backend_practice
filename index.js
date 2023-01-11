// const app =require('http')
const { response } = require('express')
const express =require('express')
const app=express()
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
]  

// const app = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/plain'})
//     response.end(JSON.stringify(notes))
// })

app.get('/',(req,res)=>{
    res.send('<h1>FFFFF</h1>')
})
app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
// app.get('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     console.log(id)
//     const note = notes.find(note => note.id === id)
//     if(note){
//         console.log(note)
//         response.json(note)
//     }
//     else{
//         response.status(404).end()
//     }
   
//   })
app.delete('/api/notes/:id',(req,res)=>{
   
    const id = Number(req.params.id)
   notes=notes.filter(note=>note.id!==id)
   res.send('Delete request to homepage')
    return res.status(204).end()
})
app.post('/api/notes',(req,res)=>{
  const note = req.body
  console.log(note)
  res.json(note)
})

const PORT =3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)