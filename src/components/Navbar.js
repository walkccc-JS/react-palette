import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles/NavbarStyles';
import 'rc-slider/assets/index.css';

function Navbar({ level, showingAllColors, changeLevel, changeFormat }) {
  const classes = useStyles();
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleFormatChange = e => {
    setFormat(e.target.value);
    setOpen(true);
    changeFormat(e.target.value);
  };

  const closeSnackbar = () => setOpen(false);

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">react palette</Link>
      </div>
      {showingAllColors && (
        <div>
          <span>Level: {level}</span>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
            className={classes.slider}
          />
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={3000}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}</span>
        }
        open={open}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
}

export default Navbar;
