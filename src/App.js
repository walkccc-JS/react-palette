import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPaletteForm from './components/NewPaletteForm';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import seedPalettes from './config/seedPalettes';
import { generatePalette } from './helpers/colorHelper';

function App() {
  const [palettes, setPalettes] = useState(seedPalettes);

  const findPalette = id => palettes.find(palette => palette.id === id);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={routeProps => (
          <NewPaletteForm savePalette={savePalette} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
