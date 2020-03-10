const express = require('express');
const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/jobs', async (req, res) => {
  const getJobs = await getAsync('github');
  const jobs = JSON.parse(getJobs);

  res.send(jobs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
