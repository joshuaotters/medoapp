import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';
import TaskState from './TaskState';
import Grid from '@mui/material/Unstable_Grid2';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Link from '@mui/material/Link';
import dateExtractor from "@/utils/dateExtractor";
import timeExtractor from "@/utils/timeExtractor";


const getTasks = async() => {
  try {
    const res = await fetch('http:localhost:3000/api/tasks', {cache: 'no-store'})
    if(!res.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return res.json();
  } catch(error) {
    console.log('Error loading tasks', error)
  }
}



export default async function Task() {
  const {tasks} = await getTasks();
  return (
    <>
    {tasks.map((t) => (
      <Grid xs={6} sx={{padding: 2}} key={t._id}>
      <Card sx={{ maxWidth: 345, backgroundColor: "#FFCACA", mb: '1rem' }}>
      <CardContent sx={{color: "text.primary"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "500"}}>
          {t.title}
        </Typography>
        <Typography variant="body2" color="#272525" sx={{fontSize: "1.1rem"}}>
        {t.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "800",
          marginTop: "1rem",
          fontSize: "1rem",
          color: "#000000"
          }}>
          <AccessTimeFilledIcon sx={{ marginRight: "0.5rem" }}/>{timeExtractor(t.dueDate)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "800",
          fontSize: "1rem",
          marginTop: "0.5rem",
          color: "#000000"
          }}>
          <EventIcon sx={{ marginRight: "0.5rem" }}/> {dateExtractor(t.dueDate)}
        </Typography>
      </CardContent>
      <CardActions>
      <TaskState/>
        <Typography sx={{
          marginLeft: "0.5rem",
          borderRadius: "6px",
          backgroundColor: "#FF8F8F",
          fontWeight: "600",
          padding: "0.5rem"
        }}>Pending</Typography>
        <Link href={`/api/tasks/${t._id}`}><EditNoteIcon sx={{ fontSize: "2.5rem", color: "#000000"}}/></Link>
      </CardActions>
      <Typography sx={{
          margin: '0.5rem',
          borderRadius: "6px",
          backgroundColor: "#DFFFFD",
          fontWeight: "600",
          padding: "0.5rem"
        }}>Priority: {t.taskPriority}</Typography>
    </Card>
    </Grid>
    ))} 
    </>
  );
}
