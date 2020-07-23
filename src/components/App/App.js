import React from 'react';
import './App.scss';
import Navigation from "../Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route, withRouter, HashRouter
} from "react-router-dom";
import Music from "../music";
import Settings from "../Settings";
import News from "../news";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import MockPosts from "../MockPosts";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "../common/preloader";
import store from '../../redux/redux-store'

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">

                <HeaderContainer/>
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
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/mock">
                            <MockPosts/>
                        </Route>
                    </Switch>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
