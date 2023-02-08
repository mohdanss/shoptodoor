const config = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    serviceId: process.env.TWILIO_SERVICE_ID,
    fromNumber: process.env.TWILIO_FROM_NUMBER
}

export default config;