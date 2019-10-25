import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

function PaletteList({ classes, palettes, deletePalette, history }) {
  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Palette</h1>
          <Link to="/palette/new">Create palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              key={palette.id}
              id={palette.id}
              handleClick={() => goToPalette(palette.id)}
              handleDelete={deletePalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
