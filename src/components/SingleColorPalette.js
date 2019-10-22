import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
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

  render() {
    const colorBoxes = this.shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));

    return (
      <div className="Palette">
        <h1>Single color palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
