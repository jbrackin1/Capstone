import { default as nexusPic } from '../images/harvestNexus.svg';
import React from 'react';
import "./home.css";

export default function Home(){
    // const nexusPic = new URL("../images/harvestNexus.svg", import.meta.url);

    
    return (
        <>
        <div>
            <img className="logo" src={nexusPic} alt="logo" />
        </div>
        </>
    )
}