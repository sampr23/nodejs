
var express = require('express');
var app = express(); 
var jquery = require('jquery');

app.use(express.static(__dirname + '/public'));
app.get('/ajaxcall', function(req, res) {
    var data ={
        contactId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@domain.com',
        phone: '12345'
    };
    res.send(data);
})

app.listen(5500);