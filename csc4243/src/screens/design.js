import React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import basic from '../images/template_basic.png';
import professional from '../images/template_professional.png';
import green from '../images/template_green.png';
import silicon from '../images/template_silicon.png';
import '../components/css/design.css';
import logo from '../images/logo.png';

import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import '../App.css';

const DesignScreen = () => {
    let navigate = useNavigate();
    const [count, setCount] = React.useState(0);

    const handleClick = event => {
        if(count == 0) {
            setCount(count => 1);
        }
        else {
            setCount(count => 0);
        }
    };

    const handleHomeClick = event => {
        navigate('/home')
    };

    let select = <img className="style" src={basic} onClick={handleClick}/>;
    if(count == 1) {
        select = <div className="parent"><div className="rectangle"/><img className="style" src={basic} onClick={handleClick}/></div>;
    };
    
    return (
    <div className="design">
        <div className="header">
            <img className='logo' src={logo} alt="" onClick={handleHomeClick}></img>
            <div className="header_text"><h1>Design</h1></div>
        </div>
        <h3>Select a layout for your resume</h3>
        <div className="Design">
            <div>
                {select}
            </div>
            <br />
            <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/result'))}}}>To Result</button>
            <div><h1></h1></div>
        </div>
    </div>
    );
};

export default DesignScreen;
