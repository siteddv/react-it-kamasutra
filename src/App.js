import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import store from './redux/redux-store';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <Route path="/messages"
              render={() => <DialogsContainer store={store} />}
            />
            <Route path="/profile"
              render={() => <ProfileContainer store={store} />}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
