import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Menu} from "antd";
import {useLocation} from "react-router-dom";

const Navigation: React.FC = () => {
    const location = useLocation()
    const [currentMenu, setCurrentMenu] = useState("/profile")
    const handleClickMenu = (e: any) => {
        setCurrentMenu(e.key)
    }
    useEffect(() => {
        if (location.pathname !== currentMenu) {
            setCurrentMenu(location.pathname)
        }
    }, [location, currentMenu])
    return (


        <Menu
            mode="inline"
            selectedKeys={[currentMenu]}
            onClick={handleClickMenu}
            style={{height: '100%', borderRight: 0}}

        >

            <Menu.Item key="/profile"><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item key="/mock"><Link to="/mock">JSON PH</Link></Menu.Item>
            <Menu.Item key="/dialogs"><Link to="/dialogs">Messages</Link></Menu.Item>
            <Menu.Item key="/users"><Link to="/users">Users</Link></Menu.Item>
            <Menu.Item key="/news"><Link to="/news">News</Link></Menu.Item>
            <Menu.Item key="/music"><Link to="/music">Music</Link></Menu.Item>
            <Menu.Item key="/settings"><Link to="/settings">Settings</Link></Menu.Item>


        </Menu>

    );
};

export default Navigation;
