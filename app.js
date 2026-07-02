const cron = require('node-cron');
const { syncTest } = require('./tasks/sync');
const { multiply, isEven, getGreeting } = require('./tasks/math');

console.log("Inicio de la app");
console.log("Version:", process.env.APP_VERSION || '1.0.0');

// Tarea cron: corre cada 5 minutos
cron.schedule('1-59/5 * * * *', syncTest);
