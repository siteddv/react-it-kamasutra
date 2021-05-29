import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from "react-redux";

<<<<<<< Updated upstream
ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider >,
   document.getElementById('root')
);
=======
const rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider value={store}>
            <App />
         </Provider >
      </BrowserRouter>,
      document.getElementById('root')
   );

}
debugger;
rerenderEntireTree();

store.subscribe(rerenderEntireTree);
>>>>>>> Stashed changes

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
