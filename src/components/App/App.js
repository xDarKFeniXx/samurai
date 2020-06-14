import React from 'react';
import './App.scss';
import Header from "../Header";
import Navigation from "../Navigation";
import Profile from "../Profile";
import Dialogs from "../dialogs";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Music from "../music";
import Settings from "../Settings";
import News from "../news";

const App = (props) => {
    const {dialogs, messages, newMessageBody}=props.state.dialogsPage;
    const {posts}=props.state.profilePage;
    // const {dispatch}=props.dispatch;
    // console.log(dispatch)
    const {newPostText}=props.state.profilePage;

    return (
        <div className="App">
            <Router>
                <Header/>
                <Navigation/>

                <div className="wrapper-content">
                    <Switch>
                        <Route exact path="/dialogs/">
                            <Dialogs
                                dialogData={dialogs}
                                messageData={messages}
                                dispatch={props.dispatch}
                                newMessageBody={newMessageBody}
                            />
                        </Route>
                        <Route path="/profile">
                            <Profile
                                posts={posts}
                                dispatch={props.dispatch}
                                newPostText={newPostText}
                            />
                        </Route>
                        <Route path="/music">
                          <Music/>
                        </Route>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/news">
                            <News/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>
    );
}

export default App;
