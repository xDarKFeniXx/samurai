import React from 'react';
import './App.scss';
import Header from "../Header";
import Navigation from "../Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Music from "../music";
import Settings from "../Settings";
import News from "../news";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const App = (props) => {


    return (
        <div className="App">
            <Router>
                <Header/>
                <Navigation/>

                <div className="wrapper-content">
                    <Switch>
                        <Route path="/dialogs/">
                            <DialogsContainer

                            />
                        </Route>
                        <Route path="/users/">
                            <UsersContainer/>
                        </Route>
                        <Route path="/profile/:userId?">
                            <ProfileContainer

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
