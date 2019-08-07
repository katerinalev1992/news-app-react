import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './components/App/App';
import newsReducer from './reducers/newsReducer';

const store = createStore(newsReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
