---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { CompleteMsgUrlParams } from '@site/src/docs-components/complete-message-comps/url-params'
import { CompleteMessage200Res } from '@site/src/docs-components/complete-message-comps/200-response'

# Complete Message
Moves a message to the `complete` state. Call this to let ez-q that the message has been successfully processed. 

### Request
POST `/messages/{id}/complete/`

<CompleteMsgUrlParams />


### Response

<Tabs>

<TabItem value="200" label="200" default>
A JSON containing the id of the message that has been moved to complete.

<CompleteMessage200Res />  

#### Example
```json
{
  id: "35548190-bad1-4626-95cf-767e0fdf0e66",
}
```
</TabItem>
<TabItem value="500" label="500" default>
An unexpected error has happened on the server.
</TabItem>
</Tabs>





