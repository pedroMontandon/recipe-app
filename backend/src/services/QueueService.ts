import * as Queue from 'bull';
import { sendCodeEmail } from '../utils/sendEmail';

export const emailQueue = new Queue('emailAuthentication', {
  redis: {
    port: 6379,
    host: 'redis',
  },
});

emailQueue.process(async (job: Queue.Job) => {
  try {
    if (job.data.method === 'activationCode') {
      const { data: { email, username, activationCode } } = job;
      await sendCodeEmail(email, username, activationCode);
    }
  } catch (error) {
    console.log(error);
  }
});

export default emailQueue;