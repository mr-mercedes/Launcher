import React from 'react';
import {LayoutProps} from "./Layout.props";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Favorites from "../Favorites/Favorites";
import Footer from "../Footer/Footer";

const Layout = ({ children }:LayoutProps) => {
    return (
        <div className={styles.launcher}>
            <Header/>
            <Favorites/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;