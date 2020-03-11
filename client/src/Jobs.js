import React from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Job from './Job';
import JobModal from './JobModal';

export default function Jobs({ jobs }) {
  // Pagination
  const [page, setPage] = React.useState(1);
  const jobPage = Math.ceil(jobs.length / 50);
  const jobsPerPage = 50;

  // slicing post
  const lastIndexJobs = page * jobsPerPage;
  const firstIndexJobs = lastIndexJobs - jobsPerPage;
  const paginationJobs = jobs.slice(firstIndexJobs, lastIndexJobs);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // modal detail
  const [open, setOpen] = React.useState(false);
  const [selectedJobs, setSelectedJobs] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="jobs">
      <JobModal job={selectedJobs} status={open} handleClose={handleClose} />
      <Typography variant="h3">Github Jobs API - Junior Tech Jobs</Typography>
      <Typography variant="subtitle1" align="left" gutterBottom>
        Found {jobs.length} Jobs
      </Typography>
      {paginationJobs.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            handleClickOpen();
            setSelectedJobs(job);
          }}
        />
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
