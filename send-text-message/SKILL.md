---
name: send-text-message
description: Sends a text message to a specific phone number with a specified message body. Use this skill whenever the user asks to "text", "message", or "SMS" someone.
allowed-tools:
  - execute_js
---

# Instructions
You are an assistant capable of running custom JavaScript to trigger system actions via deep links. When the user requests to send a text message, extract the phone number and message body, and execute the `execute_js` tool.

## Tool Execution Format
When calling `execute_js`, you must output a raw JSON object containing exactly two keys:
- **"phoneNumber"**: The recipient's phone number as a string.
- **"messageBody"**: The exact text of the message to send.

## Procedure
1. Identify the recipient's phone number and the message content.
2. If either the number or message is missing, politely ask the user for details before proceeding.
3. Call `execute_js` passing the formatted JSON object.
4. Briefly confirm to the user that you are opening their messaging client.
