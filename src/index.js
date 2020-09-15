import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/reset.css"
import "./assets/js/rem"

// 路由模式
import { HashRouter } from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

