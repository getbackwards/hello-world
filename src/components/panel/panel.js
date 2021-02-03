import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './panel.scss';

class Panel extends Component {
  render() {
    return (
      <aside className="panel">
        <h2 className="panel__heading">Panel</h2>
        <Button className="panel__button" variant="contained">
          Do something
        </Button>
      </aside>
    );
  }
}
export default Panel;
