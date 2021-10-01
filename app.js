const bodyparser = require('body-parser');
const express = require('express');
var app = express();


var PORT = 5500;

app.use(bodyparser.urlencoded({extended:true}))
  
app.get('',(req,res)=>{
 
  res.sendFile(__dirname+"/submission.html")
  res.sendFile(__dirname+"/assets/images/form-icon.png")
  res.sendFile(__dirname+"/assets/js/index.js")
})

app.post('/',(req,res)=>{
  const n1=Number(req.body.num1);
  const n2=Number(req.body.num2);
  let floors = n2;
  let appartement = n1;
  let appDivFloors = appartement / floors;
  let elevator = appDivFloors / 6;
  let elevatortotal = Math.ceil(elevator);
  let ifmorethan = Math.ceil((floors-1) / 20);
  let colonne = 1 + ifmorethan;
  let prix =elevatortotal * 7565;
  let fees = prix * 0.1;
  let totalprice = prix + elevatortotal;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('elevator requiered: '+ elevatortotal+ '<br/>');
  res.write('elevator price: '+ prix + '<br/>' );
  res.write('fees: '+ fees + '<br/>' );
  res.write('Total price: '+ totalprice + '<br/>' );
  res.send();
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});