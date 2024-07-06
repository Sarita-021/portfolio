import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import "../CSS/education.css"

const Education = ({ props }) => {


    return (
        <div id='education'>
            <div className='main-container'>
                <div className='title' data-aos="flip-down"><SchoolIcon className='edu_icon' /> Education</div>
                <div className='edu_wrapper'>
                    {props.Education.map((Val, idx) => {
                        return (
                            <div className='edu_flex' data-aos="fade-down" key={idx}>
                                <div className='logo flex-item'>
                                    <img className='logo-img' src={Val.logo} />
                                </div>
                                <div className='detail flex-item'>
                                    <div className='school_name'>
                                        {Val.School}
                                    </div>
                                    <div className='degree_name'>
                                        {Val.Degree}
                                    </div>
                                    <div className='durGar'>
                                        {Val.Duration}
                                    </div>
                                    <div className='durGar'>
                                        {Val.CGPA}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Education;