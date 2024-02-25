import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventIcon from '@mui/icons-material/Event';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import TaskCompletionState from './Task-completion-state';

export default function Task() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#FFCACA" }}>
      <CardContent sx={{color: "#000000"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "500"}}>
          Take children to School
        </Typography>
        <Typography variant="body2" color="#000000">
          Wake at 5AM and drive kids to school. Remember to pick up their lunch boxes on way back to work.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "800",
          marginTop: "1rem",
          fontSize: "1rem",
          color: "#000000"
          }}>
          <AccessTimeFilledIcon sx={{ marginRight: "0.5rem" }}/>5:30pm
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "800",
          fontSize: "1rem",
          marginTop: "0.5rem",
          color: "#000000"
          }}>
          <EventIcon sx={{ marginRight: "0.5rem" }}/> 12-Dec-2023
        </Typography>
      </CardContent>
      <CardActions>
      <TaskCompletionState/>
        <Typography sx={{
          marginLeft: "0.5rem",
          borderRadius: "6px",
          backgroundColor: "#FF8F8F",
          fontWeight: "600",
          padding: "0.5rem"
        }}>Pending</Typography>
        <Typography sx={{
          marginLeft: "1.2rem",
          borderRadius: "6px",
          backgroundColor: "#DFFFFD",
          fontWeight: "600",
          padding: "0.5rem"
        }}>Low</Typography>
      </CardActions>
    </Card>
  );
}
