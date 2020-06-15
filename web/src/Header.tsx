import React from 'react';

interface HeaderProps {
    tittle : string;
}

const Header : React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.tittle}</h1>
        </header>
    )
}

export default Header;