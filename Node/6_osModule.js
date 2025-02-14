const os = require('os')
const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(`uptime: ${uptime/60} minutes`)

const osInfo = {
    'name': os.type(),
    'release': os.release(),
    'Total_Memory': os.totalmem(),
    'free_Memory': os.freemem()
};

console.log(osInfo)