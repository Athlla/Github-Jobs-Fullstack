import React, { useState } from 'react';
import './App.css';
import Jobs from './Jobs';

const JOBS_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCB) {
  const res = await fetch(JOBS_API_URL);
  const json = await res.json();

  updateCB(json);
}

function App() {
  const [jobList, updateJobList] = useState([]);

  console.log(jobList);

  React.useEffect(() => {
    fetchJobs(updateJobList);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
