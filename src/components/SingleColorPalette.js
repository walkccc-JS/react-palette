import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    marginBottom: '-3.5px',
    cursor: 'pointer',
    display: 'inline-block',
    opacity: 1,
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.9)',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      marginLeft: '-50px',
      marginTop: '-15px',
      left: '50%',
      top: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      border: 'none',
      display: 'inline-block',
      fontSize: '1rem',
      lineHeight: '30px',
      outline: 'none',
      position: 'absolute',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase'
    }
  }
};

class SingleColorPalette extends Component {
  state = { format: 'hex' };
  shades = this.gatherShades(this.props.palette, this.props.colorId);

  gatherShades(palette, colorId) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorId)
      );
    }

    return shades.slice(1);
  }

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this.shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar showingAllColors={false} changeFormat={this.changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go back</Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
