const express = require('express')
const app = express()
const port = 5004

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard',(req,res)=>{
   return res.render('dashboard')
})

app.get('/',(req,res)=>{
    const user = {
      name: 'Cátia',
     surname: 'Elena',
     age: 30
    }
    const palavra = 'teste'
    const auth = true
    return res.render('home', {user:user, palavra,auth}) 
    //agora a home tem acesso as info do obj 
      
   })
   app.listen(port,()=>{
       console.log(`Servidor on ${port}🦦`)
   })
