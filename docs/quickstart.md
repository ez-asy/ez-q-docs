---
sidebar_position: 1
---

# Quickstart

We will first look how to get a basic `ez-q` instance up and running. 

## Start up `ez-q`

These will start up a usable `ez-q` which assumes you have a redis instance running on `localhost:6379`, if you don't, first start one with:
```bash
docker run -p 6379:6379 -d redis
```

Now we are ready lets run `ez-q`...


### ...with Docker

This is the quickest way to get an `ez-q` instance up and running. To start an instance, run the command: 

```bash
docker run -p 8080:8080 -e "REDIS_URL=redis://host.docker.internal:6379" ezasy/ez-q:0.0.1-alpha.2
```

### ...with Cargo
You may also wish to just install the project as a usable binary from cargo.

```bash
# first install
cargo install ez-q --version 0.0.1-alpha.2

# then run it
ez-q
```

## Your first message

Now we have a `eq-q` running we can publish a message and consume it. 

### Publish a message

An `ez-q` message can be pushed to the [publish message](api-reference/queue-endpoints/publish-message) endpoint. This endpoint is shaped like `/queue/${queue_name}/message/` where the `queue_name` is the name of the queue you wish to push to, a new queue is created if one does not yet exist. The body must be JSON with a key "content" which can have a value of any valid JSON.

```bash
curl --location --request POST 'http://localhost:8080/queues/my_first_queue/message' \
--header 'Content-Type: application/json' \
--data-raw '{
    "content": {
        "key": {
            "nested": "test"
        }
    }
}'

# {
#   "id": message_uuid 
# }
```

### Pull a message

Now we have a message published we can start to process it by pulling it from the queue we pushed it to using the [get message](api-reference/queue-endpoints/get-message) endpoint.
```bash
curl --location --request GET 'http://localhost:8080/queues/my_first_queue/message' \
--header 'Content-Type: application/json'

# {
#   "id": message_uuid 
#   "content": {
#     "key": {
#       "nested": "test"
#     }
#   }
# }
```

### Complete a message

Now once you have finished processing a message, you must let `ez-q` know it has finished (and the state it finished with) by making one final call. Assuming a message is successful, you can use the [get message](api-reference/message-endpoints/complete-message) as follows.
```bash
curl --location --request GET 'http://localhost:8080/messages/{message_uuid}/complete'

# {
#   "id": message_uuid 
# }
```
Similarly for a failed message you can use, 
```bash
curl --location --request GET 'http://localhost:8080/messages/{message_uuid}/fail'

# {
#   "id": message_uuid 
# }
```
