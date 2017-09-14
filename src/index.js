import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'react-notifications/lib/notifications.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
