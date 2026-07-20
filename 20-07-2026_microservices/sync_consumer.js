const amqp = require('amqplib');

async function consume(){

    try {
        // connect with rabbitmq 
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
        const channel = await connection.createChannel();

        const queue_name = 'sync_queue';

        // declare queue
        await channel.assertQueue(queue_name, {durable:false})

        // consume the message with auto ack
        channel.consume(queue_name, (message) => {
            if(message !== null){
                console.log(`[x] Received ${message.content.toString()}`);
            }
        }, 
        {
            noAck: true  // automatic acknowledgment
        }
    )

    } catch (error) {
        console.error('Error in consumer', error)
    }

}

consume();