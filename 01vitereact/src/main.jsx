import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const ReactElement = {
  type: 'a',
  props: {
      href:'https://google.com',
      target:'_blank'
  },
  children: 'Click me to visit google',
};

const element1 = (
  <a href="https://google.com" target='_blank'> Visit Google </a>
);

const element2 = "(G)";
const element3 = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'Click here for Google',
    element2
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {element1}
    {/* {element3} */}
  </React.StrictMode>
);
