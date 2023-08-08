import React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import resume from '../images/finished_resume.png';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import '../components/css/result.css';
import logo from '../images/logo.png';
import GenericPdfDownloader from "../components/download";

const Page = () => {
    let navigate = useNavigate();

    const handleClick = event => {
        navigate('/home')
    };

    const personalJson = JSON.parse(localStorage.getItem('personalKey'));
    const experienceJson = JSON.parse(localStorage.getItem('experienceKey'));
    const educationJson = JSON.parse(localStorage.getItem('educationKey'));

    return (
        <>

        <div className = "result">

            <div className="header">
                <img className='logo' src={logo} alt="" onClick={handleClick}></img>
                <div className="header_text"><h1>Final Document</h1></div>
            </div>

            <div id="resume">

            <div className='selection_box'>
            <div>
                <div className="name">{personalJson.name}</div>
                <div className="personinfo">{personalJson.city}, {personalJson.state} | {personalJson.personalphone} | {personalJson.email}</div>
                <div className="website"><a href={personalJson.linkedin} target="_blank">{personalJson.linkedin}</a></div>
            </div>
            
            <div className="miniheader">Education</div>
            <hr style={{ borderTop: "4px solid black" }}></hr>

            <div>
                <p className="school">{educationJson.school}
                <span className="graddate">{educationJson.month} {educationJson.year}</span>
                </p>
                <p className="major">{educationJson.major} {educationJson.degree}
                <span className="gpa">GPA: {educationJson.GPA}</span>
                </p>
            </div>

            <div className="miniheader">Experience</div>
            <hr style={{ borderTop: "4px solid black" }}></hr>

            <div>
                <p className="place">{experienceJson.experience1}
                {experienceJson.start1 != "" && <span className="worktime">{experienceJson.start1} - {experienceJson.end1}</span>}
                </p>
                <p className="position">{experienceJson.position1}</p>
                <p className="workstuff">{experienceJson.description1}</p>
            </div>

            <div><h1></h1></div>

            <div>
                <p className="place">{experienceJson.experience2}
                {experienceJson.start2 != "" && <span className="worktime">{experienceJson.start2} - {experienceJson.end2}</span>}
                </p>
                <p className="position">{experienceJson.position2}</p>
                <p className="workstuff">{experienceJson.description2}</p>
            </div>

            <div><h1></h1></div>

           <div>
                <p className="place">{experienceJson.experience3}
                {experienceJson.start3 != "" && <span className="worktime">{experienceJson.start3} - {experienceJson.end3}</span>}
                </p>
                <p className="position">{experienceJson.position3}</p>
                <p className="workstuff">{experienceJson.description3}</p>
            </div>

            <div><h1></h1></div>

            <div>
                <p className="place">{experienceJson.experience4}
                {experienceJson.start4 != "" && <span className="worktime">{experienceJson.start4} - {experienceJson.end4}</span>}
                </p>
                <p className="position">{experienceJson.position4}</p>
                <p className="workstuff">{experienceJson.description4}</p>
            </div>

            <div><h1></h1></div>

            <div>
                <p className="place">{experienceJson.experience5}
                {experienceJson.start5 != "" && <span className="worktime">{experienceJson.start5} - {experienceJson.end5}</span>}
                </p>
                <p className="position">{experienceJson.position5}</p>
                <p className="workstuff">{experienceJson.description5}</p>
            </div>

            <div><h1></h1></div>

            </div>

            </div>

            
            <br />
            <hr></hr>

            <button style={{ width: "175px", height: "60px" }} onClick={() => navigate('/home')}>Home</button>

        </div>

        <GenericPdfDownloader 
            rootElementId="resume"
            downloadFileName="resume" 
        />            

        </>
        
    );
}

export default Page;