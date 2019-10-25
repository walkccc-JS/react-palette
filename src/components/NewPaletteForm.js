import React, { useState } from 'react';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import CasinoIcon from '@material-ui/icons/Casino';
import DraggableColorBoxList from './DraggableColorBoxList';
import { arrayMove } from 'react-sortable-hoc';
import useStyles from './styles/NewPaletteFormStyles';

NewPaletteForm.defaultProps = {
  maxColors: 20
};

function NewPaletteForm({ maxColors, palettes, savePalette, history }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState([]);
  const isPaletteFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColor = newColor => {
    setColors([...colors, newColor]);
  };

  const removeColor = colorName => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  const addRandomColor = () => {
    const allColors = palettes.map(palette => palette.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  };

  const clearColors = () => {
    setColors([]);
  };

  const handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        palettes={palettes}
        open={open}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h2" gutterBottom>
            Design your palette
          </Typography>
          <ColorPickerForm
            colors={colors}
            isPaletteFull={isPaletteFull}
            addColor={addColor}
          />
          <div className={classes.buttons}>
            <DeleteIcon
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.button}
            />
            <CasinoIcon
              variant="contained"
              color="primary"
              disabled={isPaletteFull}
              onClick={addRandomColor}
              className={classes.button}
            />
          </div>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorBoxList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default NewPaletteForm;
