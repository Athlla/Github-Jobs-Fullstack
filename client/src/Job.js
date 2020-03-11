import React from 'react';
import { Typography, Paper } from '@material-ui/core';

export default function Job({ job, onClick }) {
  return (
    <Paper className="job" onClick={onClick}>
      <div>
        <Typography>{job.title}</Typography>
        <Typography>{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>{job.created_at}</div>
    </Paper>
  );
}
