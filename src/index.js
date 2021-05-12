import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import StoreContext from "./StoreContext"

const rerenderEntireTree = (store) => {
   ReactDOM.render(
      <StoreContext.Provider value={store}>
         <React.StrictMode>
            <App/>
         </React.StrictMode>
      </StoreContext.Provider >,
      document.getElementById('root')
   );

}
rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
