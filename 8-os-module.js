const os = require('os')
const { CLIENT_RENEG_LIMIT } = require('tls')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);