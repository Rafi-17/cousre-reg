import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
    const [courses,setCourses]=useState([]);


    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])

    return (
        <div className="md:w-3/4 md:grid md:grid-cols-3 gap-6"> 
            {
                courses.map((course,idx)=><Course key={idx} course={course}></Course>)
            }

        </div>
    );
};

export default Courses;