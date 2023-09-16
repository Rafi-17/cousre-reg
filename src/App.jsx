
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [selectedCourse,setSelectedCourse]=useState([]);
  const [totalCredit,setTotalCredit]=useState(0);
  const [totalPrice,setTotalPrice]=useState(0);
  const [finishedCredit,setFinishedCredit]=useState(false);
  const [remainingCredit,setRemainingCredit]=useState(20);

  const handleSelectedCourse=(course)=>{
    if(selectedCourse.find(item=>item.course_name===course.course_name)){
      document.getElementById('my_modal_1').showModal()
    }
    else{
      if(totalCredit+course.credit<=20){
        setTotalCredit(totalCredit+course.credit);
        setSelectedCourse([...selectedCourse,course]);
        setTotalPrice(totalPrice+course.price);
        setRemainingCredit(remainingCredit-course.credit);
      }
      else{
        document.getElementById('my_modal_1').showModal();
        setFinishedCredit(true);
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto gap-6'>
        <Courses handleSelectedCourse={handleSelectedCourse} finishedCredit={finishedCredit}></Courses>
        <Carts selectedCourse={selectedCourse} totalCredit={totalCredit} totalPrice={totalPrice} remainingCredit={remainingCredit}></Carts>
      </div>
    </>
  )
}

export default App
