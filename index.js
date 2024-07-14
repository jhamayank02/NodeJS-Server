const express = require('express');
const app = express();

const PORT = 80;

app.get('/', (req, res)=>{
    res.status(200).send("Congratulations, You have deployed your first website on AWS successfully.");
})

app.get('/json', (req, res)=>{
    res.status(200).json({
        msg: "Hello World"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is listening on PORT", PORT);
})