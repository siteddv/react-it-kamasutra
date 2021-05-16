import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <Route path="/messages"
              render={() => <DialogsContainer />}
            />
            <Route path="/profile"
              render={() => <ProfileContainer />}
            />
            <Route path="/users"
              render={() => <UsersContainer />}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
