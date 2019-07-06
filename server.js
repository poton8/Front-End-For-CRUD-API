const express = require('express');
app = express();

app.listen(3001, function listening(){
    console.log("listening");
})

app.use(express.static('Website'));