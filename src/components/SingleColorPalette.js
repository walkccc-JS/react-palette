import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

const gatherShades = (palette, colorId) => {
  let shades = [];
  let allColors = palette.colors;

  for (let key in allColors) {
    shades = shades.concat(
      allColors[key].filter(color => color.id === colorId)
    );
  }

  return shades.slice(1);
};

function SingleColorPalette(props) {
  const { classes } = props;
  const { paletteName, emoji, id } = props.palette;
  const [format, setFormat] = useState('hex');
  const shades = gatherShades(props.palette, props.colorId);

  const changeFormat = format => {
    setFormat(format);
  };

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.hex}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar showingAllColors={false} changeFormat={changeFormat} />
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

export default withStyles(styles)(SingleColorPalette);
