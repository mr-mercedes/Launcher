import React, {useEffect, useState} from 'react';
import styles from './Game.module.scss';
import Button from "../Button/Button";
import {useParams} from "react-router-dom";
import {games, TGameFields, TGames} from "../../constrants/games";
const Game = () => {
    const param = useParams();
    const gameParam = param.game as TGames;
    const [game, setGame] = useState<TGameFields>({name:'', img:'', alt:''});
    useEffect(() => {
        if (gameParam) {
            setGame(games[gameParam])
        }
    }, [gameParam]);
    const [isInstall, setIsInstall] = useState<boolean>(false);
    const handleInstall = () => {
        setIsInstall(!isInstall)
    }
    return (
        <div className={styles.game}>
            <div className={styles.game_logo}>
                <img src={game.img} alt={game.alt}/>
            </div>
            <div className={styles.info}>
                <div className={styles.field}>
                    <img src={'./cart.svg'} alt={'cart logo'}/>
                    <span className={styles.text}>{game.name + ' Shop'}</span>
                </div>
                <div className={styles.field}>
                    <img src={'./chat.svg'} alt={'chat logo'}/>
                    <span>Форум</span>
                </div>
                <div className={styles.field}>
                    <img src={'./info.svg'} alt={'info logo'}/>
                    <span>Описание обновления</span>
                </div>
            </div>

            <div className={styles.option_wrapper}>
                <select
                    className={styles.options}
                    name="versions"
                    id="versions"
                    defaultValue={`${game.name} Release`}
                >
                    <option value={`${game.name} TEST`}>
                        {game.name} TEST
                    </option>
                    <option value={`${game.name} Release`}>
                        {game.name} Release
                    </option>
                </select>
                <Button isInstall={!isInstall} onClick={handleInstall}/>
            </div>
        </div>
    );
};

export default Game;