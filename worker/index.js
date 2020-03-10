const fetchGithub = require('./tasks/fetch-github');

let CronJob = require('cron').CronJob;
let job = new CronJob(
  '* * * * *',
  fetchGithub,
  null,
  true,
  'America/Los_Angeles'
);
job.start();
