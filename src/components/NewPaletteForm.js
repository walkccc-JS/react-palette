import React, { useState, useEffect } from 'react';
import PaletteFormNav from './PaletteFormNav';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorBoxList from './DraggableColorBoxList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ChromePicker from 'react-color';
import { useInput } from './hooks/InputHook';
import { arrayMove } from 'react-sortable-hoc';
import useStyles from './styles/NewPaletteFormStyles';

NewPaletteForm.defaultProps = {
  maxColors: 20
};

function NewPaletteForm({ maxColors, palettes, savePalette, history }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState('teal');
  const [colors, setColors] = useState([]);
  const {
    value: newColorName,
    bind: bindNewColorName,
    reset: resetNewColorName
  } = useInput('');
  const isPaletteFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const addColor = () => {
    const newColor = { color: currentColor, name: newColorName };
    setColors([...colors, newColor]);
    resetNewColorName();
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

  const handleSubmit = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      colors,
      id: newPaletteName.toLowerCase().replace(/ /g, '-')
    };
    savePalette(newPalette);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  return (
    <div className={classes.root}>
      <PaletteFormNav
        classes={classes}
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
        <Typography variant="h4">Design your palette</Typography>
        <Button variant="contained" color="secondary" onClick={clearColors}>
          Clear palette
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={isPaletteFull}
          onClick={addRandomColor}
        >
          Random color
        </Button>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addColor}>
          <TextValidator
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Color name must be unique',
              'Color already be used'
            ]}
            {...bindNewColorName}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isPaletteFull}
            style={{ backgroundColor: isPaletteFull ? 'gray' : currentColor }}
          >
            {isPaletteFull ? 'Palette is full' : 'Add color'}
          </Button>
        </ValidatorForm>
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
