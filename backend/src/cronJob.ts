import { CronJob } from 'cron';

const backendURL = 'https://motorsshop-tfzb.onrender.com/cars';

const job = new CronJob('*/14 * * * *', async () => {
  console.log('Restarting server');

  try {
    const cronJobRequest = await fetch(backendURL);
    if (cronJobRequest.status === 200) {
      console.log('Server Connection Refreshed');
    }
  } catch (error) {
    console.log(error);
  }
});

export default job;
