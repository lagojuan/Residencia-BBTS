const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (error) => {
    if(error){
        console.log("Errou");
        return;
    }
    console.log("Tudo normal");
});