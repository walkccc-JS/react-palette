import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorBoxList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, index) => (
        <DraggableColorBox
          color={color.color}
          name={color.name}
          key={color.name}
          index={index}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorBoxList;
