import React, { useState } from "react";
import './combat.css';

export default function Combat(){
    const [field, setField] = useState('');
    const handleField = (e)=>{
        setField(e.target.value);
    }
    return(
        <div className="field">
            
            <input type="text" placeholder="Digite aqui o nome" onChange={handleField}/>
            <button >ADD</button>
            {field}
        </div>
    );
}