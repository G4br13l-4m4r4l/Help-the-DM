import React from "react";
import { Link } from "react-router-dom";

export const Home=()=>{
    return(
        <div>
            Coming soon!
            <div className="link">
                <Link to="/Combat">Combate</Link><br/>
                <Link to="/dices">Dados</Link>
            </div>

        </div>

    );
}