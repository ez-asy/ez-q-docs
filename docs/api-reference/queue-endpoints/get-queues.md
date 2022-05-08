---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { GetQueues200Accordion } from '../../../src/docs-components/get-queues-comps/200-response-body'

# Get Queues
Get a list of all queue names known to `ez-q`. 

### Request
GET `/queues/`


### Response

<Tabs>

<TabItem value="200" label="200" default>
A JSON list of all known queue names as strings.

<GetQueues200Accordion/>  

#### Example
```json
{
  queues: [
    "queue_1",
    "another_queue"
  ]
}
```
</TabItem>
<TabItem value="500" label="500" default>
An unexpected error has happened on the server.
</TabItem>
</Tabs>




