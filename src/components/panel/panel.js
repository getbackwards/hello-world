import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../scripts/scripts';
import './panel.scss';

class Panel extends Component {
  render() {
    return (
      <aside className="panel">
        <h2 className="panel__heading">Panel</h2>
        <Button id="panelButton" className="panel__button" variant="contained">
          Do something
        </Button>
      </aside>
    );
  }
}
export default Panel;
