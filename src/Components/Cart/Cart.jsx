import PropTypes from 'prop-types';

const Cart = ({course,idx}) => {
    const {course_name}=course;
    console.log(course);
    return (
        <div>
            <p className='text-[#1C1B1B99]'>{idx+1} {course_name}</p>
        </div>
    );
};


Cart.propTypes={
    course:PropTypes.object,
    idx:PropTypes.number
}

export default Cart;