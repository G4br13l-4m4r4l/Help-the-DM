import React from "react";
import './menu.css';

export default function Intro(){
    return(
        <div className="welcome">
            <div className="title"><h1>Help the DM!</h1></div>

            <div className="sideBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Em Breve</a></li>
                    <li><a href="#" className="especial">Sobre mim</a></li>
                </ul>
            </div>
        </div>
    );

}