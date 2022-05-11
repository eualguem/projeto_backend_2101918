const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const { get } = require('express/lib/response')
const res = require('express/lib/response')


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));



function readFile(path) {
  var fileContent = fs.readFileSync(path, "utf-8");
  return fileContent;
}
function  writefile(path,data){
  fs.writeFileSync(path,data)
}
//console.log(readFile('./persons.json'));

app.get('/', (req, res) => { //endpoint pode faazer pedido e devolver resposta 
  res.send('Hello World!')

})
cd
app.get('/users', (req, res) => {
  res.send(personobject)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get(
  '/users',// rota ou path
  function (request, response) {// codigo a executar
    var fileContent = readFile('./persons.json')
    response.send(fileContent);
  }
)
app.post('/users', function (request, response) {
//person qque vem no body do pedido 
  var person = request.body;

  var size = Object.keys(personobject).length;// vai contar o tamanho dentro do primeiro {}
  size++;//quantidade dos persons+1
  // atribui o ifd ao tamanho +1
  
  person.id=size;
  //criar uma nova chave por exemplo person 6 que tera o valor de personq eu vem no body
  personobject['person'+ person.id]= person;
  //enviar id da pessoa que foi inserida
  response.send(person.id+"");


 writefile ("./persons.json",JSON.stringify(personobject));


});
app.get('/users/:id', function (request, response) {
  var id = request.params.id;
  var person = personobject['person' + id];

  if (person == undefined){
    response.send("this id dont exist"+ id);
    }
    else{
      response.send(person);
    }
  }
)



app.put('/users/:id', (request, response)=>{
  var id = request.params.id;
 var personbody= request.body;
 var person=personobject["person"+id];
 if (person==undefined){
  response.send("this id dont exist"+ id);
  }
  else{
     personbody.id= parseInt(id);
     personobject["person"+id]=personbody;
    response.send(personbody);
 writefile ("./persons.json",JSON.stringify(personobject));
  }
})




app.put('/users', function (request, response) {
  response.send('this post')
});

app.delete('/users/:id', (request, response)=>{
  var id = request.params.id;
  var person=personobject["person"+id];
  if (person==undefined){
  response.send("this id dont exist"+ id);
  }
  else{
    delete personobject["person"+id];
    response.send("this "+id+" was deleted");
 writefile ("./persons.json",JSON.stringify(personobject));
  }

});


var personstrings = readFile('./persons.json');
var personobject = JSON.parse(personstrings);
