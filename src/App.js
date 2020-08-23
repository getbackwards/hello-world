import React from 'react';
import './app.scss';

import Header from './components/header/header';
import Content from './components/content/content';
import Panel from './components/panel/panel';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Content></Content>
      <Panel></Panel>
    </div>
  );
}

export default App;
