import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles/MiniPaletteStyles';

function MiniPalette({
  id,
  colors,
  paletteName,
  emoji,
  handleClick,
  handleDelete
}) {
  const classes = useStyles();

  const deletePalette = e => {
    e.stopPropagation();
    handleDelete(id);
  };

  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      style={{ backgroundColor: color.color }}
      className={classes.miniColor}
    />
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon
          onClick={deletePalette}
          style={{ transition: 'all 0.3s ease-in-out' }}
          className={classes.deleteIcon}
        />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emjoi}>{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
