import React from "react";
import Form from "../components/Form";
import './combat.css';
import { Link } from "react-router-dom";

export default function Combat(){

    return(
        <div className="field">
            <Form/>
            <Link to="/Combat">Combate</Link><br/>
            <Link to="/dices">Dados</Link>
        </div>
    );
}