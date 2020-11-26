import { CreateTopicRequest } from 'kafka-node'
const kafkaHost = process.env.KAFKA_HOST as string


const defaultTopic = {
  partitions: 1,
  replicationFactor: 2
}
type KafkaConfig = {
  topics: CreateTopicRequest[]
  serverRef: string
}
const config: KafkaConfig = {
  topics: [
    {
      ...defaultTopic,
      topic: 'Test'
    }
  ],
  serverRef: kafkaHost
}

export default config
