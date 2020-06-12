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

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Navigation/>

                <div className="wrapper-content">
                    <Switch>
                        <Route path="/dialogs">
                            <Dialogs/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
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
