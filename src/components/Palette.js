import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';
import useStyles from './styles/PaletteStyles';

function Palette({ palette }) {
  const classes = useStyles();
  const { colors, paletteName, emoji, id } = palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = level => setLevel(level);

  const changeFormat = format => setFormat(format);

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      showingFullPalette
      key={color.id}
      name={color.name}
      background={color[format]}
      moreUrl={`/palette/${id}/${color.id}`}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        showingAllColors
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />
      <div className={classes.colorBoxesContainer}>{colorBoxes}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
