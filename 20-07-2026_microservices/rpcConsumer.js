const amqp = require('amqplib');

async function startServer(){
     const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
    const channel = await connection.createChannel();

    
    const requestQueue = 'rpc_queue';

    await channel.assertQueue(requestQueue, {durable:false});
    channel.prefetch(1);

    console.log(`[Consumer] Awaiting RPC Requests..`);

    channel.consume(requestQueue, async(msg) => {
        if(msg !== null){
            const inputNumber = parseInt(msg.content.toString());
            console.log(`[Consumer] Received request to calculate square of ${inputNumber}`);

            // we willl do processing 
            const result = inputNumber * inputNumber;
            const response = `The square of ${inputNumber} is ${result}`;

            // reply back to the queue
            channel.sendToQueue(
                msg.properties.replyTo,
                Buffer.from(response),
                {correlationId: msg.properties.correlationId}
            )

            // acknowledge
            channel.ack(msg);
            console.log(`[Consumer] send the response back`)
        }
    })
}

startServer();