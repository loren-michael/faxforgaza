import React from 'react';
import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import "./App.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './context/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <StoreProvider>
//       <App />
//     </StoreProvider>
//   </React.StrictMode>
// , document.getElementById('root'));


// const container = ReactDOM.createRoot(document.getElementById('root'));
// const root = createRoot(container)

// root.render(
//   <React.StrictMode>
//     <StoreProvider>
//       <App />
//     </StoreProvider>
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <StoreProvider>
//       <App />
//     </StoreProvider>
//   </React.StrictMode>
// )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
