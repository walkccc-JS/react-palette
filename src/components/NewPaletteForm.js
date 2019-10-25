import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorBoxList from './DraggableColorBoxList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ChromePicker from 'react-color';
import { useInput } from './hooks/InputHook';
import { arrayMove } from 'react-sortable-hoc';
import useStyles from './styles/NewPaletteFormStyles';

function NewPaletteForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('teal');
  const [colors, setColors] = useState([]);
  const {
    value: newColorName,
    bind: bindNewColorName,
    reset: resetNewColorName
  } = useInput('');
  const { value: newPaletteName, bind: bindNewPaletteName } = useInput('');

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

  const handleSubmit = () => {
    const paletteName = newPaletteName;
    const newPalette = {
      paletteName,
      colors,
      id: paletteName.toLowerCase().replace(/ /g, '-')
    };
    props.savePalette(newPalette);
    props.history.push('/');
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
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

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
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              {...bindNewPaletteName}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter a palette name',
                'Palette name must be unique'
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
        <Button variant="contained" color="secondary">
          Clear palette
        </Button>
        <Button variant="contained" color="primary">
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
            style={{ backgroundColor: currentColor }}
          >
            Add color
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
