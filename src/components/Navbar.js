import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  state = { format: 'hex' };

  handleFormatChange = e => {
    this.setState({ format: e.target.value });
    this.props.changeFormat(e.target.value);
  };

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">react palette</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
            className="slider"
          />
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
