import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"

import 'bulma/css/bulma.css';
import './styles.scss';

function reducer() {
    return {
        title: "This is Example Text"
    }
}

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
