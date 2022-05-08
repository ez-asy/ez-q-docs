---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PublishMessageUrlParams } from '@site/src/docs-components/publish-message-comps/url-params'
import { PublishMessage200Res } from '@site/src/docs-components/publish-message-comps/200-response'

# Publish Message
Publish a message to a given queue. 

If the queue does not exist, this will first create a queue with the given queue name.

### Request
POST `/queues/{queue_name}/message/`

<PublishMessageUrlParams />

### Response

<Tabs>

<TabItem value="200" label="200" default>
A JSON object containing the ID of the message that has been published.

<PublishMessage200Res/>  

#### Example
```json
{
  id: "35548190-bad1-4626-95cf-767e0fdf0e66"
}
```
</TabItem>
<TabItem value="500" label="500" default>
An unexpected error has happened on the server.
</TabItem>
</Tabs>

