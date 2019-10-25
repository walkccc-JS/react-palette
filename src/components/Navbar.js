import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import logo from '../logo.svg';
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles';
import 'rc-slider/assets/index.css';

function Navbar({
  classes,
  level,
  showingAllColors,
  changeLevel,
  changeFormat
}) {
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
      <Link to="/" className={classes.logo}>
        <img
          src={logo}
          alt="logo"
          width="30"
          height="30"
          style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
        />
        <span className={classes.siteName}>React Palette</span>
      </Link>
      {showingAllColors && (
        <div>
          <span style={{ fontFamily: 'Montserrat', marginLeft: '1rem' }}>
            Level: {level}
          </span>
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
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
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

export default withStyles(styles)(Navbar);
