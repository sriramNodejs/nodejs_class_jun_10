const amqp = require('amqplib');

async function sendRequest(){
    const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
    const channel = await connection.createChannel();

    const requestQueue = 'rpc_queue';

    // create a temporary callback queue for receiving the response 
    const replyQueue = await channel.assertQueue('', {exclusive: true});

    // generate a correlation ID
    const correlationId = Math.random().toString() + Date.now().toString();

    const numberToSend = 5;

    console.log(`[Producer] sending request to calculate squre of ${numberToSend}`);

    // Listen to queue
    channel.consume(replyQueue.queue, (msg) => {
        if(msg.properties.correlationId === correlationId){
            console.log(`[Producer] received response: ${msg.content.toString()}`);
        }

        setTimeout(async () =>{
            await channel.close();
            await connection.close();
        }, 1000)
    }, {
        noAck: true
    });


    // send the request
    channel.sendToQueue(requestQueue, Buffer.from(numberToSend.toString()), {
        correlationId,
        replyTo: replyQueue.queue
    })
}

sendRequest();