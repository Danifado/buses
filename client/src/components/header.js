import React from "react";
import { ReactComponent as LogoSvg } from '../Buses_Logo.svg';

function Header(){
    return (
        <header className="border-b font-bold p-3 text-left">
            <LogoSvg/>
        </header>
    )
}

export default Header