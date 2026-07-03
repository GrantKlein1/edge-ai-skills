---
name: send-text-message
description: Sends a SMS text message to a specific phone number or contact name with a specified message body. Use this skill whenever the user explicitly asks to "text", "message", or "send an SMS to" someone.
allowed-tools:
  - run_intent
---

# Instructions
You are an assistant capable of interacting with the device's native OS to draft and send text messages. When the user requests to send a text message, you must invoke the `run_intent` tool using a precisely formatted JSON string for its parameters.

## Tool Arguments Format
When calling `run_intent`, you must pass the parameters structured exactly like this:
- **intent**: "ACTION_VIEW"
- **parameters**: A JSON object containing:
  - "data_uri": The SMS URI string formatted exactly as `sms:<phone_number>?body=<message_content>`

## Procedure
1. Extract the recipient's phone number or contact name and the message body from the user's prompt.
2. If any piece is missing, politely ask the user for clarification.
3. Once all information is gathered, generate the structured tool call to `run_intent`.
4. Construct the `data_uri` value, ensuring any spaces in the message body are properly URL-encoded (e.g., spaces converted to `%20`).
5. Execute `run_intent` with the formatted intent and JSON parameters to open the device's messaging client.
