import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './panel.scss';

class Panel extends Component {
  render() {
    return (
      <aside className="panel">
        <h2 className="panel__heading">Panel</h2>
        <Button variant="contained">Hello World</Button>
      </aside>
    );
  }
}
export default Panel;
