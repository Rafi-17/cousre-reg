import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({selectedCourse}) => {
    return (
        <div className="md:w-1/4 w-80 bg-white p-6">
            <h2 className='text-xl font-bold mb-5'>Course Name:</h2>
            {
                <ol>
                     {selectedCourse.map((course,idx)=><Cart key={idx} course={course}></Cart>)}
                </ol>
            }
        </div>
    );
};

Carts.propTypes={
    selectedCourse:PropTypes.array
}

export default Carts;