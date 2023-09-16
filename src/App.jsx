
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [selectedCourse,setSelectedCourse]=useState([]);

  const handleSelectedCourse=(course)=>{
    if(selectedCourse.find(item=>item.course_name===course.course_name)){
      document.getElementById('my_modal_1').showModal()
    }
    else{
      setSelectedCourse([...selectedCourse,course]);
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto gap-6'>
        <Courses handleSelectedCourse={handleSelectedCourse}></Courses>
        <Carts selectedCourse={selectedCourse}></Carts>
      </div>
    </>
  )
}

export default App
