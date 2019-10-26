import React, { useState } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorBoxList from './DraggableColorBoxList';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import CasinoIcon from '@material-ui/icons/Casino';
import useStyles from './styles/NewPaletteFormStyles';
import seedPalettes from '../config/seedPalettes';

NewPaletteForm.defaultProps = { maxColors: 20 };

function NewPaletteForm({ maxColors, palettes, savePalette, history }) {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(true);
  const [colors, setColors] = useState(seedPalettes[4].colors);
  const isPaletteFull = colors.length >= maxColors;

  const handleDrawerOpen = () => setDrawerOpened(true);

  const handleDrawerClose = () => setDrawerOpened(false);

  const addColor = newColor => setColors([...colors, newColor]);

  const addRandomColor = () => {
    const allColors = palettes.map(palette => palette.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  };

  const removeColor = colorName =>
    setColors(colors.filter(color => color.name !== colorName));

  const removeAllColors = () => setColors([]);

  const handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setColors(arrayMove(colors, oldIndex, newIndex));

  return (
    <div className={classes.root}>
      <PaletteFormNav
        palettes={palettes}
        open={drawerOpened}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
      />
      <Drawer
        anchor="left"
        variant="persistent"
        open={drawerOpened}
        classes={{
          paper: classes.drawerPaper
        }}
        className={classes.drawer}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
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
              color="secondary"
              variant="contained"
              onClick={removeAllColors}
              className={classes.button}
            />
            <CasinoIcon
              color="primary"
              variant="contained"
              disabled={isPaletteFull}
              onClick={addRandomColor}
              className={classes.button}
            />
          </div>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpened
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorBoxList
          axis="xy"
          colors={colors}
          distance={20}
          removeColor={removeColor}
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default NewPaletteForm;
