import React from 'react';
import ReactDOM from 'react-dom';
import template from './app.pug'


ReactDOM.render(
  template.call(this, {'logo': '/logo.png'}),
  document.getElementById('root')
);
