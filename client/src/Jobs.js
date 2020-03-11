import React from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Job from './Job';

export default function Jobs({ jobs }) {
  // Pagination
  const [page, setPage] = React.useState(1);
  const jobPage = Math.ceil(jobs.length / 50);
  const jobsPerPage = 50;

  // slicing post
  const lastIndexJobs = page * jobsPerPage;
  const firstIndexJobs = lastIndexJobs - jobsPerPage;
  const paginationJobs = jobs.slice(firstIndexJobs, lastIndexJobs);
  console.log(paginationJobs);

  const handleChange = (event, value) => {
    setPage(value);
    console.log({ value });
    console.log({ event });
  };

  return (
    <div className="jobs">
      <Typography variant="h3">Github Jobs API - Junior Tech Jobs</Typography>
      {paginationJobs.map((job, i) => (
        <Job key={i} job={job} />
      ))}

      <div className="pagination">
        <Pagination
          color="primary"
          count={jobPage}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
