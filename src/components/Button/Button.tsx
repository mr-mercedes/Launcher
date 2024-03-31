import React from 'react';
import {ButtonProps} from "./Button.props";
import styles from './Button.module.scss';
import cn from 'clsx';

const Button = ({isInstall, ...props}:ButtonProps) => {
    return (
        <button className={cn(styles.button, {
            [styles.isInstall]: isInstall
        })} {...props}>
            {!isInstall? 'Установить' : 'Играть'}
        </button>
    );
};

export default Button;