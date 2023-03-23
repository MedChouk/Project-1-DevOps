const express = require('express'); 
const app = express(); 

app.get('/', function(req, res) { 
    res.send("<h1> Hi There !!</h1>"); 
}); 


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));