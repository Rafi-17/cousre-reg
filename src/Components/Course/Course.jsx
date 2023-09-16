import PropTypes from 'prop-types';
import { PiCurrencyDollar } from 'react-icons/pi'
import { GoBook } from 'react-icons/go'

const Course = ({course}) => {

    const {image,course_name,course_details,price,credit}=course;

    console.log(course);
    return (
        <div className='drop-shadow-2xl bg-white p-4'>
            <img className='mb-3 w-72' src={image} alt="" />
            <h3 className='mb-2 font-semibold'>{course_name}</h3>
            <p className='text-sm text-[#1C1B1B99] mb-4'><small>{course_details}</small></p>
            <div className='flex justify-between mb-5'>
                <div className='flex items-center'>
                    <span className='text-xl mr-3'><PiCurrencyDollar></PiCurrencyDollar></span>
                    <p className='text-[#1C1B1B99] text-sm'>Price: {price}</p>
                </div>
                <div className='flex items-center'>
                    <span className='text-xl mr-3'><GoBook></GoBook></span>
                    <p className='text-[#1C1B1B99] text-sm'>Credit: {credit}hr</p>
                </div>
            </div>
            <button className='w-full border border-[#2F80ED] bg-[#2F80ED] py-1 rounded-md text-white'>Select</button>
        </div>
    );
};


Course.propTypes={
    course:PropTypes.object
}

export default Course;