import { AgGridReact } from 'ag-grid-react';
import React, { Component } from 'react';
import './ag-theme-fresh-custom.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App ag-theme-fresh">
        <AgGridReact
          columnDefs={[{ field: 'TEST1' }, { field: 'TEST2' }]}
          rowData={[
            { TEST1: 'TEST1-1', TEST2: 'TEST2-1' },
            { TEST1: 'TEST1-2', TEST2: 'TEST2-2' },
          ]}
        />
      </div>
    );
  }
}

export default App;
