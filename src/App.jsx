import './App.css'
import Boxes from './Components/Boxes/Boxes'
import DarkMode from './Components/DarkMode/DarkMode'
import MemeGenerator from './Components/MemeGenerator/MemeGenerator'
import Message from './Components/Message/Message'
import NavBar from './Components/NavBar/NavBar'
import ReactForms from './Components/ReactForms/ReactForms'
import SignUpForm from './Components/SignUpForm/SignUpForm'
import WindowTracker from './Components/WindowTracker/WindowTracker'

function App( ) {
  

  return (
    <>
      {/* <WindowTracker /> */}
      <NavBar />
       <MemeGenerator />
      {/* <Boxes />
      <DarkMode />
      <Message /> */}
      {/* <ReactForms /> */}
      {/* <SignUpForm /> */}
    </>
  )
}

export default App