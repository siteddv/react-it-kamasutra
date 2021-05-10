import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  debugger;
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
                  dialogsData={props.store.getState().messagesPage.dialogsData}
                />
              }
            />
            <Route path="/profile"
              render={
                () => <Profile
                  profilePage={props.store.getState().profilePage}
                  addPost={props.store.addPost.bind(props.store)}
                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}
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
