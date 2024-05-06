import React from 'react';
import './index.scss';

type Props = {
    color: string;
    state: string;
    hidden?: boolean;
    value?: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
};

const Button = ({
    color,
    state,
    hidden,
    value,
    handleClick,
    children,
}: Props) => {
    const buttonStyle = {
        '--button-color': state === value ? 'gray' : color,
        visibility: hidden ? 'hidden' : 'visible',
    } as React.CSSProperties;

    return (
        <button
            className="button"
            value={value}
            style={buttonStyle}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
