import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import Footer from './Footer';

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
    const { paletteName, emoji } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this.shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className="Palette">
        <Navbar showingAllColors={false} changeFormat={this.changeFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
