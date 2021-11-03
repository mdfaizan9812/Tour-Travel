const express = require('Express');
const path = require('path');
const app = express();

// get path for html file
const staticPath = path.join(__dirname,'../public');

// built-in middleware
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(8000,()=>{
    console.log("Listening.......");
})