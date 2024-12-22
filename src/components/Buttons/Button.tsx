import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
    children, onClick, variant = 'primary'
}): ReactNode => {
    return (
        <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
