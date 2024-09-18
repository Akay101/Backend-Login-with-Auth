const express = require('express')
const app = express();
const port = process.env.PORT || 5000

app.get("/home", (req,res)=>{
    res.send("Hello from the server again");
})



app.listen(port, ()=>{
    console.log(`server is live at ${port}`);
})