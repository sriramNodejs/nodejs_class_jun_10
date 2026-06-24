const cluster = require('cluster')
const os = require('os');
const express = require('express');


if(cluster.isPrimary){
    const numOfCPUs = os.cpus().length;
    console.log(numOfCPUs, 8)
    console.log('primary system is active, so forking the application');
    for(let i = 0; i < numOfCPUs; i++){
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died, restaring replacement instance `)
        cluster.fork()
    })
} else {
    const app = express();

    app.get('/', (req, res) => {
        res.send('hello from server and Process Id is ' + process.pid)
    })


    app.listen(3000, () => {
        console.log('server is running on '+3000)
    })
}