import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

function Palette({ classes, palette }) {
  const { colors, paletteName, emoji, id } = palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = level => {
    setLevel(level);
  };

  const changeFormat = format => {
    setFormat(format);
  };

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showingFullPalette
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        showingAllColors
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />
      <div className={classes.colorBoxesContainer}>{colorBoxes}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
