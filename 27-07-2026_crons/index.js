// Using ESM syntax
import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('*/10 * * * * *', () => {
  console.log('This message prints once every minute.');
});