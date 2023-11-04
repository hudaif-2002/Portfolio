import React from 'react'; //req for writinh jsx
import ReactDOM from 'react-dom/client'; // used for rendering React components into the DOM.
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';//This is a component that enables the use of routing in your application.


const root = ReactDOM.createRoot(document.getElementById('root'));// used to create a root for concurrent rendering. Concurrent rendering is a feature of React that allows multiple components to be updated independently without blocking the main thread.
root.render(  //it  is called to render the main component of the application
  //BrowserRouter component is used to enable client-side routing in your application, allowing you to navigate between different pages without a full page reload.
  <BrowserRouter>  
    <App />
  </BrowserRouter>
);
