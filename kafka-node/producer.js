const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'mi-client-id',
    brokers: ['localhost:9092']
})
const producer = kafka.producer()
const run = async () => {
    // Producing
    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Ya quedo1' },
        ],
    })

}

run().catch(console.error);