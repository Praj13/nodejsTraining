const http = require('http');

// Get the status codes object
const statusCodes = http.STATUS_CODES;

// Display all status codes with descriptions
console.log("HTTP Status Codes:\n");
for (const [code, message] of Object.entries(statusCodes)) {
    console.log(`${code}: ${message}`);
}
