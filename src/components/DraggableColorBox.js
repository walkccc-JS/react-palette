import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(({ color, name, handleClick }) => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default DraggableColorBox;
