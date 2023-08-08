import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import "../components/css/home.css";
import logo from '../images/logo.png';

const homeDefaultValues = {
    industry: ''
}

const Page = () => {
    let navigate = useNavigate();

    const [values, setValues] = React.useState(homeDefaultValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: e.target.value });
    };

    const chooseResume = () => {
        localStorage.setItem('mode', 'resume');
        navigate('/personal');
    };

    const chooseCV = () => {
        localStorage.setItem('mode', 'cv');
        navigate('/personal');
    };

    React.useEffect(() => {
        localStorage.setItem('homeKey', JSON.stringify(values));
    }, [values]);

    return (
        <div className="home">

            <div className="header">
                <img className='logo' src={logo} alt=""></img>
                <div className="header_text"><h1>Home</h1></div>
            </div>

            <h2>Before we get started, what industry/major do you classify under?</h2>
            <select style={{ width: "175px", height: "60px" }} name="industry" id="industry" onChange={handleChange}>
                <option value="" disabled selected>Select Your Option</option>
                <option value="engineering">Engineering</option>
                <option value="computerScience">Computer Science</option>
                <option value="physSciences">Physical Sciences</option>
                <option value="lifeSciences">Life Sciences</option>
                <option value="humanities">Humanities</option>
                <option value="social">Social Sciences</option>
                <option value="business">Business</option>
            </select>
            <h1>CREATE YOUR RESUME (for new users)</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => chooseResume()}>Start Resume</button>
            <h1>More Experienced? Create a New CV</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => chooseCV()}>Start CV</button>
        </div>
    );
}

export default Page;
