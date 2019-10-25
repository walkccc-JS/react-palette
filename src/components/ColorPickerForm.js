import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import ChromePicker from 'react-color';
import { useInput } from './hooks/InputHook';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

function ColorPickerForm({ classes, colors, isPaletteFull, addColor }) {
  const [currentColor, setCurrentColor] = useState('teal');
  const {
    value: newColorName,
    bind: bindNewColorName,
    reset: resetNewColorName
  } = useInput('');

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    addColor(newColor);
    resetNewColorName();
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(({ color }) => color !== currentColor)
    );
  });

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color already be used'
          ]}
          margin="normal"
          placeholder="Color name"
          {...bindNewColorName}
          className={classes.colorNameInput}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isPaletteFull}
          style={{ backgroundColor: isPaletteFull ? 'gray' : currentColor }}
          className={classes.addColorButton}
        >
          {isPaletteFull ? 'Palette is full' : 'Add color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
