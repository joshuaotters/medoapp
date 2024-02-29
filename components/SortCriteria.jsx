'use client';//Tell react to render a component on the client

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import SortIcon from '@mui/icons-material/Sort';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


const sortCriteria = ['Category', 'Priority', 'Due Date'];//Start from here to reflect changes in other parts

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Sort By</DialogTitle>
      <List sx={{ pt: 0 }}>
        {sortCriteria.map((sortCriterion) => (
          <ListItem disableGutters key={sortCriterion}>
            <ListItemButton onClick={() => handleListItemClick(sortCriterion)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <SortIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={sortCriterion} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SortCriteria() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(sortCriteria[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div" sx={{
          fontWeight: "500",
          textAlign: "center"
        }}>
        Sort By: {selectedValue}
      </Typography>
      <br />
      <Typography variant="subtitle1" component="div" sx={{
          fontWeight: "500",
          textAlign: "center"
        }}>
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<SortIcon />} sx={{
          fontWeight: "500",
          color: "#000000",
        }}>
       Change Sort Criteria
      </Button>
      </Typography>
      
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}