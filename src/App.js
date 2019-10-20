import React from 'react';
import Palette from './components/Palette';
import seedPalettes from './config/seedPalettes';
import { generatePalette } from './helpers/colorHelper';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[0])} />
    </div>
  );
}

export default App;
