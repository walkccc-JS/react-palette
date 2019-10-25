import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useInput } from './hooks/InputHook';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

function PaletteMetaForm({ palettes, handleSubmit, hideForm }) {
  const [stage, setStage] = useState('form');
  const { value: newPaletteName, bind: bindNewPaletteName } = useInput('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const showEmojiPicker = () => setStage('emoji');

  const savePalette = emoji => {
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    };
    handleSubmit(newPalette);
  };

  return (
    <div>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker title="Pick a Palette Emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        aria-labelledby="form-dialog-title"
        open={stage === 'form'}
        onClose={hideForm}
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>
            <TextValidator
              fullWidth
              margin="normal"
              label="Palette Name"
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
              {...bindNewPaletteName}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={hideForm}>
              Cancel
            </Button>
            <Button color="primary" variant="contained" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;
