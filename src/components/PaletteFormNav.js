import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import useStyles from './styles/PaletteFormNavStyles';

function PaletteFormNav({ palettes, open, handleSubmit, handleDrawerOpen }) {
  const classes = useStyles();
  const [formShowing, setFormShowing] = useState(false);

  const showForm = () => setFormShowing(true);

  const hideForm = () => setFormShowing(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.createPaletteText}>
            Create a palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <Link to="/">
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
            >
              Back
            </Button>
          </Link>
          <Button
            color="primary"
            variant="contained"
            onClick={showForm}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          hideForm={hideForm}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default PaletteFormNav;
