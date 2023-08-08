import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../components/css/education.css';
import '../App.css';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormControl, FormLabel, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import "../components/css/education.css";
import logo from '../images/logo.png';

const educationDefaultValues = {
    school: '',
    major: '',
    degree: '',
    GPA: '',
    month: '',
    year: '',
};
const Page = () => {
    let navigate = useNavigate();

    const [values, setValues] = React.useState(educationDefaultValues);

    const handleClick = event => {
        navigate('/home');
    };

    const handleChange = (e) => {
        const{name, value} = e.target;
        setValues({ ...values, [name]: e.target.value });
    };

    React.useEffect(() => {
        localStorage.setItem('educationKey', JSON.stringify(values));
      }, [values]);

    function majorHelp() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    function degreeHelp() {
        var popup = document.getElementById("degreePopup");
        popup.classList.toggle("show");
    }

    function gpaHelp() {
        var popup = document.getElementById("gpaPopup");
        popup.classList.toggle("show");
    }

    function institutionHelp() {
        var popup = document.getElementById("institutionPopup");
        popup.classList.toggle("show");
    }

    return (
        <div className="education">
            <div className="header">
                <img className='logo' src={logo} alt="" onClick={handleClick}></img>
                <div className="header_text"><h1>Education Information</h1></div>
            </div>
            <h1>Please fill out your up-to-date education information to open your resume!</h1>
            
            <div><h1></h1></div>
            <div className='selection_box'>
            <Box sx={{ align: 'center'}}>
            <FormControl sx={{ m: 3, width: '75ch' }} variant="standard">
            <h1>Education</h1>
            <div>
                <TextField
                    id="schoolInput"
                    name="school"
                    label="Institution"
                    values={values.school}
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => institutionHelp()}><FaQuestionCircle />
                    <span class="popuptext" id="institutionPopup">Enter your university or institution, wherever you are pursuing current education.</span>
                </div>
            </div>
            <div>
                <TextField
                    id="majorInput"
                    name="major"
                    label="Major"
                    values={values.major}
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => majorHelp()}><FaQuestionCircle />
                    <span class="popuptext" id="myPopup">Enter your major (unabbreviated)</span>
                </div>
            </div>
            <div>
                <TextField
                    id="degreeInput"
                    name="degree"
                    label="Degree"
                    values={values.degree}
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => degreeHelp()}><FaQuestionCircle />
                    <span class="popuptext" id="degreePopup">Enter your degree type (i.e. Bachelor's, Master's, PhD, etc.)</span>
                </div>
            </div>
            <div>
                <TextField
                    id="gpaInput"
                    name="GPA"
                    label="GPA"
                    values={values.GPA}
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => gpaHelp()}><FaQuestionCircle />
                    <span class="popuptext" id="gpaPopup">Optional: enter your GPA equivalent to a 4.0 scale.</span>
                </div>
            </div>
            </FormControl>

            <h3>Graduation Date</h3>  
             
            <FormControl sx={{'& .MuiTextField-root': { m: 1, width: '20ch' },}} variant="standard">
            <div>
            <TextField
                id="monthInput"
                name="month"
                label="Month"
                values={values.month}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="yearInput"
                name="year"
                label="Year"
                values={values.year}
                onChange={handleChange}
                variant="standard"
            />
            </div> 
            </FormControl>

            {/* <div id="graduation-container">
                <h2>Graduated?</h2>
                <div class="graduation-radio">
                    <input type="radio" value="Yes" name="graduated" />Yes
                </div>
                <div class="graduation-radio">
                    <input type="radio" value="No" name="graduated" />No
                </div>
            </div>

            <div id="major-container">
                <div class="form-field">
                <input class="info-form" type="text" placeholder="Major" name="major" required />
                    <div class="popup" onClick={() => majorHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="myPopup">Enter your major (unabbreviated)</span>
                    </div>
                </div>
                <div class="form-field">
                <input class="info-form" type="text" placeholder="Degree Type" name="degree" required />
                    <div class="popup" onClick={() => degreeHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="degreePopup">Enter your degree type (i.e. Bachelor's, Master's, PhD, etc.)</span>
                    </div>
                </div>
                <div class="form-field">
                <input class="info-form" type="text" placeholder="GPA (Optional)" name="gpa" />
                    <div class="popup" onClick={() => gpaHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="gpaPopup">Optional: enter your GPA equivalent to a 4.0 scale.</span>
                    </div>
                </div>
                <div class="form-field">
                <input class="info-form" type="text" placeholder="Institution" name="institution" />
                    <div class="popup" onClick={() => institutionHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="institutionPopup">Enter your university or institution, wherever you are pursuing current education.</span>
                    </div>
                </div>
            </div> */}
        </Box>
        </div>
        <div><h1></h1></div>
        <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/experience'))}}}>To Experiences</button>
        {/* <button style={{ width: "175px", height: "60px" }} onClick={console.log(values)}>Test info</button> */}
        <div><h1></h1></div>
        </div>
    );
}

export default Page;
