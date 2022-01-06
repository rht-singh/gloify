const cluster = require('cluster');
const os = require('os');
const express = require('express');
const dotenv = require('dotenv').config();
require('./config/config')
const routing = require('./routes/route');


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/v1',routing);

if(cluster.isMaster){
    for(let i=0; i<os.cpus().length-3; i++){

        cluster.fork();
    }
}
else app.listen(port, () => {
     console.log(`server started at port ${port}`);
});