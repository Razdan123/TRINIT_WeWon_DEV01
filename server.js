const express = require('express');
const app = express();



const port = 1001 || process.env.PORT;


app.listen(port, () => {
    console.log(`server is running at port number ${port}`)
});