import React from 'react';
import useStyles from './styles/FooterStyles';

function Footer({ paletteName, emoji }) {
  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default Footer;
