const amqp = require('amqplib');

async function produceAsyncBatch(){
    try {
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
        const channel = await connection.createChannel();

        const queue_name = 'async_queue';

        // rabbitmq messages will persists if the rabbitmq server is restarts or crashes
        await channel.assertQueue(queue_name, {durable:true});

        for(let i = 0; i <= 5; i++){
            const message = `Async task #${i}`;

            channel.sendToQueue(queue_name, Buffer.from(message), {persistent: true})
            console.log(`[x] Sent ${message}`)
        }


        await channel.close();
        await connection.close();


    } catch (error) {
        console.error('Error in async queue', error)
    }
}

produceAsyncBatch()