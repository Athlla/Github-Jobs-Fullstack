import React from 'react';
import { Typography, Paper } from '@material-ui/core';

export default function Job({ job }) {
  return (
    <Paper className="job">
      <div>
        <Typography>{job.title}</Typography>
        <Typography>{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>{job.created_at}</div>
    </Paper>
  );
}
