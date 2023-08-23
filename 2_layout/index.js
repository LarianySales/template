const express = require('express')
const app = express()
const port = 5003

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    return res.render('home')  
      
   })
   app.listen(port,()=>{
       console.log(`Servidor on ${port}🦦`)
   })
