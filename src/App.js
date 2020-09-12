import React from 'react'; 
import './App.css';
import {FormControl, Select} from '@material-ui'

function App() {
  return (
    <div className="App">
    <h1>COVID-19 Tracker</h1>
    <FormControl className="app__dropdown">
      <Select 
      variant="outline"
      value="abc">
        <MenuItem value="worlwide">Worlwide</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
}

export default App;
