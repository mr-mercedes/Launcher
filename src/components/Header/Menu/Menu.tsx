import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <img
                className={styles.logo}
                src={'./carx.png'}
                alt={'logo'}/>
            <img
                className={styles.arrow}
                src={'./arrow-down.svg'}
                alt={'arrow'}/>
        </div>
    );
};

export default Menu;