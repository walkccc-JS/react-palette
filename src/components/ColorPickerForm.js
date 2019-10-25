import React, { useState, useEffect } from 'react';
import ChromePicker from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { useInput } from './hooks/InputHook';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

function ColorPickerForm({ classes, colors, isPaletteFull, addColor }) {
  const [color, setColor] = useState('teal');
  const {
    value: newColorName,
    bind: bindNewColorName,
    reset: resetNewColorName
  } = useInput('');

  const updateColor = newColor => setColor(newColor.hex);

  const handleSubmit = () => {
    const newColor = {
      color: color,
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
      colors.every(({ color }) => color !== color)
    );
  });

  return (
    <div>
      <ChromePicker
        color={color}
        onChangeComplete={updateColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          margin="normal"
          placeholder="Color name"
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color already be used'
          ]}
          className={classes.colorNameInput}
          {...bindNewColorName}
        />
        <Button
          color="primary"
          type="submit"
          variant="contained"
          disabled={isPaletteFull}
          style={{ backgroundColor: isPaletteFull ? 'gray' : color }}
          className={classes.addColorButton}
        >
          {isPaletteFull ? 'Palette is full' : 'Add color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
