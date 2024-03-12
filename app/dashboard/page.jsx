//Conditionally show either the Task component or the NoTask component depending
//whether there are any added tasks or not.
'use client'
//App Dashboard
import NoTask from "@/components/NoTasks";
import NewTaskBtn from "@/components/NewTaskBtn";
import Task from "@/components/Task";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SortCriteria from "@/components/SortCriteria";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Index() {
  return (
    <Grid container spacing={2}>
      {/* Content to show if tasks are available */}
      <Grid xs={12} sx={{padding: 2}}>
          <SortCriteria/>
      </Grid>
        <Task/>
      {/* Content to show if NO tasks are available
      <Grid xs={12} sx={{padding: 2}}>
        <NoTask/>
      </Grid> */}
      <NewTaskBtn/>
    </Grid>
    );
}
