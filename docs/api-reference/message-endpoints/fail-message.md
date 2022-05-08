---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { FailMsgUrlParams } from '@site/src/docs-components/fail-message-comps/url-params'
import { FailMessage200Res } from '@site/src/docs-components/fail-message-comps/200-response'

# Fail Message
Moves a message to the `fail` state. Call this to let ez-q that the message processing has not been successful. 

### Request
POST `/messages/{id}/fail/`

<FailMsgUrlParams />

### Response

<Tabs>

<TabItem value="200" label="200" default>
A JSON object containing the ID of the message that has been moved to failed.

<FailMessage200Res/>  

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

