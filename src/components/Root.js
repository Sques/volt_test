import React, { Component } from 'react';
import store from '../store'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'

import Menu from './Menu'
import Layout from './Layout.js'

import history from '../history'
import '../main.css'
import 'react-select/dist/react-select.css';

function Root(){
  return (
    <Router history={history}>
      <Provider store = {store}>
        <div>
          <Menu />
          <Layout />
        </div>
      </Provider>
    </Router>
  );
}

export default Root;