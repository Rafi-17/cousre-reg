import PropTypes from 'prop-types';

const Cart = ({course}) => {
    const {course_name}=course;
    console.log(course);
    return (
        <div>
            <li>{course_name}</li>
        </div>
    );
};


Cart.propTypes={
    course:PropTypes.object
}

export default Cart;