const express = require('express');
console.log("Hello World!");
const app = express();
console.log(app);
app.get('/',(req,res)=>res.send('Hello World!'));
app.listen(3000,()=> console.log('Example app listening on port 3000!'));

