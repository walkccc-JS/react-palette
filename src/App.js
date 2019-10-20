import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedPalettes from './config/seedPalettes';
import { generatePalette } from './helpers/colorHelper';

class App extends Component {
  findPalette = id => seedPalettes.find(palette => palette.id === id);

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette list</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
