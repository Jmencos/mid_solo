import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Router  from './RRsucks/Router'
import LoginForm from './components/login';
import Display from './components/display';
const container = document.getElementById('root');
const root = createRoot(container);
const routes = [ {
  path: '/',
  index: true,
  element: <App />,
},
{
  path: '/test',
  element: <Display />
}];
root.render(<Router routes={routes} />)




