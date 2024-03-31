import React, {JSX, useEffect, useState} from 'react';
import styles from './Favorites.module.scss';
import {Link} from "react-router-dom";


const Favorites = () => {
    const [paths, setPaths] = useState<string[]>(['./street.png', './dro.png'])
    const [games, setGames] = useState<JSX.Element[]>(new Array(2).fill(<></>));
    useEffect(() => {
        updateGames(paths)
    }, [paths]);
    const updateGames = (paths:string[]) => {
        const upd = paths.map(game => {
            const path = game.split('.')[1]
            return (
                <div key={game} className={styles.icons_wrapper}>
                    <Link to={path}>
                    <img
                        className={styles.icon}
                        src={game}
                        alt={game}/>
                    </Link>
                </div>
            )
        })
        setGames(upd);
    }


    return (
        <div className={styles.wrapper}>
            <img key={'star'} src={'./star.svg'} alt={'star icon'}/>
            {games.map(g => g)}
            <div className={styles.added}>
                <img
                    key={'plus'}
                    className={styles.plus}
                    src={'./plus.svg'}
                    alt={'plus'}/>
            </div>
        </div>
    );
};

export default Favorites;