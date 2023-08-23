const express = require('express')
const app = express()
const port = 5003

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    const user = {
      name: 'Cátia',
     surname: 'Elena',
     age: 30
    }
    const palabra = 'teste'
    return res.render('home', {user:user,palabra}) //agora a home tem acesso as info do obj 
      
   })
   app.listen(port,()=>{
       console.log(`Servidor on ${port}🦦`)
   })
