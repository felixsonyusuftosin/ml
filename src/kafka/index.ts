import express = require('express')
import kafka, { CreateTopicRequest, KafkaClient } from 'kafka-node'
import config from '../configurations/kafka.config'

const Producer = kafka.Producer
const client = new KafkaClient({ kafkaHost: config.serverRef })
const producer = new Producer(client)
const kafkaTopics: CreateTopicRequest[] = config.topics

producer.on('ready', () => {
  console.log(' producer is ready and  creating topics from kafka config')
  client.createTopics(kafkaTopics, (error, result) => {
    if (error) {
      console.log(`Error could not create topic because ${error}`)
      return
    }
    console.log(`Created topics successfully ${result}`)
  })
})
producer.on('error', err => {
  console.log(' producer is error state')
  console.log(err)
})

export default producer
