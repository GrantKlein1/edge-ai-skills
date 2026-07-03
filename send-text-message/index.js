// This function will be called by the Gemma model via the webview
function sendSMS(phoneNumber, messageBody) {
    try {
        // Clean up the phone number and safely encode the message text
        const cleanNumber = phoneNumber.replace(/[^0-9+]/g, '');
        const encodedBody = encodeURIComponent(messageBody);
        
        // Trigger the native iOS SMS deep link sheet
        window.location.href = `sms:${cleanNumber}&body=${encodedBody}`;
        
        return "Success: iOS SMS sheet opened.";
    } catch (error) {
        return "Error launching SMS: " + error.message;
    }
}
