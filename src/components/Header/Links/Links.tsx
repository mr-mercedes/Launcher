import React from 'react';
import styles from './Links.module.scss';
import {Link} from "react-router-dom";
const Links = () => {
    return (
        <div className={styles.links_wrapper}>
            <div className={styles.links}>
                <Link to={'/'}><span>Главная</span></Link>
                <span>Игры</span>
                <span>Магазин</span>
            </div>
        </div>

    );
};

export default Links;