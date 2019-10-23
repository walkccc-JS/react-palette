import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
  state = { format: 'hex', open: false };

  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.changeFormat(e.target.value);
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, level, showingAllColors, changeLevel } = this.props;
    const { format } = this.state;

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
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        ></Snackbar>
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
