import React, {useState} from "react";
import { Link } from "react-router-dom";
import './dices.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export default function Dice(){

const [dice, setDice] = useState();

    return(
        <div className="container">
            <div className="main">
                <div className='box' data-aos="fade-right" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-offset="200" data-aos-duration="1000">
                    <div className='form'>
                        <h2>Dices</h2>
                        <div className='inputbox'>
                            <input type='number' onChange={e=> setDice(e.target.value) } required="required"/>
                            <span>Tipo de dado</span>
                            <i></i>
                        </div>
                        <div className='inputbox'>
                            <input type='number' required="required"/>
                            <span>Quantidade de dados</span>
                            <i></i>
                        </div>
                        <div className='links'>
                            <Link to='/'>Saiba mais</Link>
                            <Link to='/'>Voltar</Link>
                        </div>
                        <input type="submit" value='Roll'/>
                        <br/>
                        
                        <div className="inputbox">
                            
                            <i></i>
                            {dice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}