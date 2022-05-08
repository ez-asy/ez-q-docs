---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { GetMessageUrlParams } from '@site/src/docs-components/get-message-comps/url-params'
import { GetMessage200Res } from '@site/src/docs-components/get-message-comps/200-response'

# Get Message
Pull a message from a queue. 


### Request
GET `/queues/{queue_name}/message/`

<GetMessageUrlParams />


### Response

<Tabs>

<TabItem value="200" label="200" default>
A JSON containing the id of the message popped and it's content.

<GetMessage200Res />  

#### Example
```json
{
  id: "35548190-bad1-4626-95cf-767e0fdf0e66",
  content: {
    "name": "Ada Lovelace",
    "email": "ada@geemail.com",
    "bio": "First programmer. No big deal.",
    "age": 198
  }
}
```
</TabItem>
<TabItem value="500" label="500" default>
An unexpected error has happened on the server.
</TabItem>
</Tabs>





