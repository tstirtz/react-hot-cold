import React from 'react';
import ReactDOM from 'react-dom';
import {Provier} from 'react-redux';

import './reset.css';
import './index.css';
import {createStore} from './index';

import Game from './components/game';

ReactDOM.render(
    <Provider store={createStore}>
      <Game />
    </Provider>,
      document.getElementById('root')
);
