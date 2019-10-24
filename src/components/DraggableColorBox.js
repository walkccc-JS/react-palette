import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    marginBottom: '-5px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative'
  }
});

export default function DraggableColorBox(props) {
  const { color, name } = props;
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      {name}
    </div>
  );
}
