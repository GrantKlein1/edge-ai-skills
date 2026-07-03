---
name: send-text-message
description: Sends a SMS text message to a specific phone number or contact name with a specified message body. Use this skill whenever the user explicitly asks to "text", "message", or "send an SMS to" someone.
allowed-tools:
  - run_intent
---

# Instructions
You are an assistant capable of interacting with the device's native OS to draft and send text messages. When the user requests to send a text message, extract the recipient's information and the message content, then use the `run_intent` tool to trigger the native OS messaging system.

## Procedure
1. Identify the recipient's phone number or contact name.
2. Identify the body text of the message. 
3. If the phone number or message body is missing, ask the user to clarify before executing the tool.
4. Execute the `run_intent` tool using the standard SMS protocol URI scheme (`sms:<phone_number>?body=<message>`).
5. After launching the intent, visually confirm to the user that the messaging app has been opened with their text pre-filled.

## Expected Output
A successful call to the native intent schema to open the device's messaging client.
