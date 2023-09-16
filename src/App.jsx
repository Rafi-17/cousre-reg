
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto gap-6'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
