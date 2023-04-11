const express = require('express')
const { json } = require('express/lib/response')
const employe = require('./employe')


const app = express()
app.use(express.json())



app.listen(3000, () => {
  console.log('listening');
})

app.get('/', ( req , res) => {
  res.json({Message : "Api is working"})
})



app.get('/api/employe', ( req , res) => {
  res.json(employe)
})

app.post('/api/employe' ,(req , res ) => {
  
  if(!req.body.last_name){

    return res.json({Error : "Last name is required"})
  }
  
  
  const user =  {

      id : employe.length+1 ,
      first_name : req.body.first_name ,
      last_name : req.body.last_name
    }
    employe.push(user)
  res.json(user)
})
app.put('/api/employe/:id' , (req , res)  => {
     let id = req.params.id
     let first_name = req.body.first_name
     let last_name  = req.body.last_name

     let index = employe.findIndex((employe) => {
       return (employe.id == Number.parseInt(id))
     })
     console.log(id , req.body , index);
     if (index > 0) {
       let emp = employe[index]
       emp.first_name = first_name
       emp.last_name = last_name
       res.json(emp)
     }else {
       res.status(404)
       res.end()
     }
})
app.delete('/api/employe/:id' , (req , res)  => {
  let id = req.params.id;
  let index = employe.findIndex((employe) => {
    return (employe.id == Number.parseInt(id))
  })

  if (index >=  0) {
    let emp = employe[index]
    employe.splice(index , 1)
    res.json(emp)
  }else {
    res.status(404)
    
  }
})

