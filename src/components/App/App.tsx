import React, {useEffect} from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import Preloader from "../common/preloader";
import store from '../../redux/redux-store'
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Music from "../music";
import Settings from "../Settings";
import News from "../news";
import Login from "../Login/Login";
import MockPosts from "../MockPosts";
import {initializeApp} from "../../redux/app-reducer";
import {Layout} from 'antd';
import HeaderComponent from '../Header/Header';
import Navigation from '../Navigation/Navigation';


const {Header, Content, Sider} = Layout;
const AppWithRouterAndStore: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}
const App: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])
    // @ts-ignore
    const initialized = useSelector(state => state.app.initialized)
    if (!initialized) {
        return <Preloader/>
    }

    return (

        <Layout>
            <Header className="header">

                <HeaderComponent/>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Navigation/>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
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
                    </Content>
                </Layout>
            </Layout>
        </Layout>

    );
};

export default AppWithRouterAndStore;
