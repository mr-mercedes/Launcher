import React from 'react';
import Menu from "./Menu/Menu";
import Links from "./Links/Links";
import styles from './Header.module.scss';
import Notifications from "./Notifications/Notifications";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left_block}>
                <Menu/>
                <Links/>
            </div>
            <Notifications/>
        </header>
    );
};

export default Header;