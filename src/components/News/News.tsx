import React from 'react';
import {NewsProps} from "./News.props";
import styles from './News.module.scss';
const News = ({item}:NewsProps) => {
    return (
        <div
            className={styles.wrapper}
            key={item.id}
        >
            <img src={item.url} alt={item.title}/>
            <div className={styles.text}>
                <span>{item.title}</span>
            </div>
        </div>
    );
};

export default News;