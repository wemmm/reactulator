import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './Frame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Frame />, document.getElementById('frame'));
registerServiceWorker();
