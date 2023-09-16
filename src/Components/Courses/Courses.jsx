import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleSelectedCourse,finishedCredit}) => {
    const [courses,setCourses]=useState([]);


    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])

    return (
        <div className="md:w-3/4 md:grid md:grid-cols-3 gap-6"> 
            {
                courses.map((course,idx)=><Course key={idx} course={course} handleSelectedCourse={handleSelectedCourse} finishedCredit={finishedCredit}></Course>)
            }

        </div>
    );
};


Courses.propTypes={
    handleSelectedCourse:PropTypes.func,
    isModalOpen:PropTypes.bool,
    closeModal:PropTypes.func,
    finishedCredit:PropTypes.bool
}

export default Courses;