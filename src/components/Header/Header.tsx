import React from 'react';
import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {Button, Col, Row} from "antd";

const HeaderComponent = () => {
    const dispatch = useDispatch()
    // @ts-ignore
    const isAuth = useSelector(state => state.auth.isAuth)
    // @ts-ignore
    const login = useSelector(state => state.auth.login)
    const handleLogOutButton = () => {
        dispatch(logout())
    }
    return (
        <Row justify="center">
            <Col span={4}>
                <img style={{height: "40px"}} src={logo} alt="logo"/>
            </Col>
            <Col span={16}>
                <div style={{color: "red"}}>center content</div>
            </Col>
            <Col span={4}>
                {isAuth
                    ? <div style={{color: "red"}}>{login} - <Button onClick={handleLogOutButton}>Log out</Button></div>
                    : <Button> <Link to={'/login'}>Login</Link></Button>}
            </Col>


        </Row>
    );
};

export default HeaderComponent;
