const amqp = require('amqplib');

const simulateAsyncTask = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function asyncConsume(){
    try {
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
        const channel = await connection.createChannel();
        
        const queue_name = 'async_queue';

        await channel.assertQueue(queue_name, {durable: true});

        channel.prefetch(1);

        console.log(`[x] worker is listening on ${queue_name}`);

        channel.consume(queue_name, async (message) => {
            if(message !== null){
                const content = message.content.toString();

                await simulateAsyncTask(2000)
                console.log(`[x] completed processing task ${content}`)


                channel.ack(message);  // this message will remvoe from queue
            }
        },
        {
            noAck: false
        }
    )
    } catch (error) {
        console.error('Error in async consumer', error)
    }
}

asyncConsume();