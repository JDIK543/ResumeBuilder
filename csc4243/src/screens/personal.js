import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../components/css/personal.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import '../components/css/personal.css';
import logo from '../images/logo.png';

const personalDefaultValues = {
    name: '',
    personalphone: '',
    email: '',
    streetname: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    extraaddres: '',
    linkedin: ''
};

const Page = () => {

    const homeJson = JSON.parse(localStorage.getItem('homeKey'));

    const [values, setValues] = React.useState(personalDefaultValues);

    const handleClick = event => {
        navigate('/home')
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: e.target.value });
    };

    React.useEffect(() => {
        localStorage.setItem('personalKey', JSON.stringify(values));
      }, [values]);

    let navigate = useNavigate();

    let githubBlock;
    if(homeJson.industry == "computerScience") {
        githubBlock = <TextField 
        id="githubInput" 
        name="github"
        label="Github" 
        values={values.github}
        onChange={handleInputChange}
        variant="standard" 
    />
    }

    return (
        <div className = "personal">
            <div className="header">
                <img className='logo' src={logo} alt="" onClick={handleClick}></img>
                <div className="header_text"><h1>Personal Information</h1></div>
            </div>

            <div><h1></h1></div>
            <div className='selection_box'>
                <Box sx={{ align: 'center'}}>
                <FormControl sx={{ m: 3, width: '75ch' }} variant="standard">
                    <h1>Contact Info</h1>
                    <TextField
                        id="fullNameInput"
                        name = "name"
                        label="Full Name"
                        type = "text"
                        value={values.name}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="phoneInput"
                        name="personalphone"
                        label="Personal Phone Number"
                        values={values.personalphone}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="emailInput"
                        name="email"
                        label="Email Address"
                        values={values.email}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField 
                        id="linkedInInput" 
                        name="linkedin"
                        label="LinkedIn"
                        values={values.linkedin}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    {githubBlock}
                </FormControl>
                </Box>
            </div>

            <div><h1></h1></div>
            <div className='selection_box'>
                <Box sx={{ align: 'center'}}>
                <FormControl sx={{ m: 3, width: '75ch' }} variant="standard">
                    <h1>Address</h1>
                    <TextField
                        id="streetNameInput"
                        name="streetname"
                        label="Street Name"
                        values={values.streetname}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="cityInput"
                        name="city"
                        label="City"
                        values={values.city}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="stateInput"
                        name="state"
                        label="State"
                        values={values.state}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="zipInput"
                        name="zip"
                        label="Zip Code"
                        values={values.zip}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="countryInput"
                        name="country"
                        label="Country"
                        values={values.country}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                    <TextField
                        id="extraAddInput"
                        name="extraaddres"
                        label="Apt. num, building num, etc"
                        values={values.extraaddres}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </FormControl>
                </Box>
            </div>

            <div><h1></h1></div>
            
            <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/education'))}}}>To Education</button>
            {/* <button style={{ width: "175px", height: "60px" }} onClick={console.log(values)}>Test info</button> */}

            <div><h1></h1></div>
        </div>
    );
};

export default Page;