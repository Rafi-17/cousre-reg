import PropTypes from "prop-types";
import { PiCurrencyDollar } from "react-icons/pi";
import { GoBook } from "react-icons/go";

const Course = ({ course, handleSelectedCourse,finishedCredit }) => {
  const { image, course_name, course_details, price, credit } = course;

  return (
    <div className="drop-shadow-2xl bg-white p-4 rounded-lg">
      <img className="mb-3 w-72" src={image} alt="" />
      <h3 className="mb-2 font-semibold">{course_name}</h3>
      <p className="text-sm text-[#1C1B1B99] mb-4">
        <small>{course_details}</small>
      </p>
      <div className="flex justify-between mb-5">
        <div className="flex items-center">
          <span className="text-xl mr-3">
            <PiCurrencyDollar></PiCurrencyDollar>
          </span>
          <p className="text-[#1C1B1B99] text-sm">Price: {price}</p>
        </div>
        <div className="flex items-center">
          <span className="text-xl mr-3">
            <GoBook></GoBook>
          </span>
          <p className="text-[#1C1B1B99] text-sm">Credit: {credit}hr</p>
        </div>
      </div>
      {/* <button
        onClick={() => handleSelectedCourse(course)}
        className="w-full border border-[#2F80ED] bg-[#2F80ED] py-1 rounded-md text-white"
      >
        Select
      </button> */}
<button className="w-full border border-[#2F80ED] bg-[#2F80ED] py-1 rounded-md text-white" onClick={() => handleSelectedCourse(course)()}>Select</button>
<dialog id="my_modal_1" className="">
  <div className="bg-slate-600 p-3 rounded-xl h-80 text-center pt-28">
    <h3 className="font-bold text-xl text-center">{finishedCredit?'You cannot take more than 20hr credits' : 'Already added!'}</h3>
    <p className="py-4">{finishedCredit?'': 'You cannot add same course more than one time'}</p>
    <div className="">
      <form method="dialog">
        <button className="mt-10 bg-[#2F80ED] py-1 px-5 rounded-md">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleSelectedCourse: PropTypes.func,
  isModalOpen:PropTypes.bool,
  finishedCredit:PropTypes.bool
};

export default Course;
