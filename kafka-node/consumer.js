const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'mi-client-id',
    brokers: ['localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'Prueba-David' })

const run = async () => {

    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            })
        },
    })
    
}

run().catch(console.error);