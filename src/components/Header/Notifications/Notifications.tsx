import React from 'react';
import styles from './Notifications.module.scss';

const Notifications = () => {
    return (
        <div className={styles.notification}>
            <img src={'./notification.svg'} alt={'notification'}/>
        </div>
    );
};

export default Notifications;