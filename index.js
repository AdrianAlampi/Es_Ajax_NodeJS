const express = require("express")
const app = express()
const port = 3000
app.use(express.urlencoded({extended : false}))
const fs = require("fs");
/* const { append } = require("vary"); */

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
  res.render("frontend/home.ejs")
  
})

app.get("/login", (req, res)=>{
  res.render('ajax', {title: 'An Ajax Example', username: "AJAX is great!"});
  /*   fs.readFile("users.json", (err, data) => { 
        var users = JSON.parse(data);
        for(let i=0; i < users.length; i++){
            if(users[i] == null){
                if(user == users[i].user && pw ==  users[i].password){
                    console.log("succesfull");
                    response.send("login effetuato!");
                }else{
                    console.log("credenziali errate");
                }
            }
           
        }
    }); */
})

app.get("/signIn", (req, res)=>{

})
/* app.post("/ver.ejs", (req, res)=>{
    console.log("n: "+req.body.user)
    console.log("n: "+req.body.pw)
    console.log("n: "+req.body.m)
    let studente = {
       nome: req.body.user,
       cognome:  req.body.pw ,
       matricola: req.body.m
    }
    let data1 = JSON.stringify(studente)
   
    let data = data1
    fs.appendFileSync('studenti.json', data)
    res.render("ver.ejs")
}) */

app.listen(port, ()=>console.info("sto ascoltandando su: http://localhost:3000"))