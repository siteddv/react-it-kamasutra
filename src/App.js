import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <Route path="/messages"
              render={
                () => <Dialogs
                  dialogsData={props.appState.messagesPage.dialogsData}
                />
              }
            />
            <Route path="/profile"
              render={
                () => <Profile
                  postsData={props.appState.profilePage.postsData}
                />
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
