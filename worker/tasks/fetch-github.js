const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const JOBS_URL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
  const allJobs = [];
  let resultCount = 1;
  let onPage = 1;

  console.log('Fetching github Jobs API');

  while (resultCount > 0) {
    const res = await fetch(`${JOBS_URL}?page=${onPage}`);
    const jobs = await res.json();
    resultCount = jobs.length;
    onPage++;

    console.log(`Got ${jobs.length} jobs`);
    allJobs.push(...jobs);
  }

  console.log(`Total ${allJobs.length} jobs`);

  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr') ||
      jobTitle.includes('architect')
    ) {
      return false;
    }

    return true;
  });

  console.log(`Junior jobs total ${jrJobs.length} jobs`);

  const success = await setAsync('github', JSON.stringify(jrJobs));

  console.log({ success });
}

module.exports = fetchGithub;
