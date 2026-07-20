const amqp = require('amqplib');

async function produce(){
    try {
        // connect to rabbitmq 
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
        // create the channel 
        const channel = await  connection.createChannel();

        const queue_name = 'sync_queue';
        const message = "Hello from nodejs sync producer";

        // durable false means, if rabbitmq server restarts if message is not reached to the consuemer (the message will lost)
        await channel.assertQueue(queue_name, {durable: false})

        channel.sendToQueue(queue_name, Buffer.from(message));

        console.log(`[x] Sent ${message}`)


        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('error in producer', error)
    }
}

produce();