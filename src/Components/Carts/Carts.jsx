import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({selectedCourse,totalCredit,totalPrice,remainingCredit}) => {
    return (
        <div className='md:w-1/4 w-80 max-h-96 bg-white p-6 rounded-lg'>
            <div>
                <p className='pt-2 pb-4 text-[#2F80ED] font-bold '>Credit Hour Remaining {remainingCredit} hr</p>
            </div>
            <hr />
            <div className="">
                <h2 className='text-xl font-bold mb-5 pt-4'>Course Name:</h2>
                {
                    <ol>
                        {selectedCourse.map((course,idx)=><Cart key={idx} idx={idx} course={course}></Cart>)}
                    </ol>
                }
            </div>
            <hr className='mt-6' />
            <p className='my-4'>Total Credit Hour : {totalCredit}</p>
            <hr className='mb-4'/>
            <p>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Carts.propTypes={
    selectedCourse:PropTypes.array,
    totalCredit:PropTypes.number,
    totalPrice:PropTypes.number,
    remainingCredit:PropTypes.number

}

export default Carts;