const express = require('express')
const port = 5003
const exphbs = require('express-handlebars')
//usando o express
const app = express()
// usando o handlebars
app.engine('handlebars',exphbs.engine())// engine que vai usar (o handlebars)
app.set('view engine', 'handlebars')//setar as informarções,trabalhar com info,no caso mostrar as pastas que ele ira olhar e trabalhar

app.get('/',(req,res)=>{
 return res.render('home',{layout:false})  //o render vai compilar,identificar e mostrar a página
    //para dar a resposta
})
app.listen(port,()=>{
    console.log(`Servidor on ${port}🦦`)
})