import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';
import useStyles from './styles/DraggableColorBoxListStyles';

const DraggableColorBoxList = SortableContainer(({ colors, removeColor }) => {
  const classes = useStyles();

  return (
    <div className={classes.DraggableColorBoxList}>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          color={color.color}
          name={color.name}
          key={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorBoxList;
