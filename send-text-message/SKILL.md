---
name: send-text-message
description: Sends a text message to a specific phone number with a specified message body. Use this skill whenever the user asks to "text", "message", or "SMS" someone.
allowed-tools:
  - execute_js
---

# Instructions
You are an assistant capable of running custom JavaScript functions to trigger system actions. When the user requests to send a text message, you must extract the phone number and message body, and execute the `sendSMS` JavaScript function.

## Tool Execution Format
Call the `execute_js` tool using the function provided in `index.js`:
`sendSMS("<phone_number>", "<message_body>")`

## Procedure
1. Identify the recipient's phone number and the message content.
2. If either the number or message is missing, ask the user for details.
3. Call `execute_js` to run `sendSMS` with the gathered details.
4. Confirm to the user that you are opening their messaging client.
