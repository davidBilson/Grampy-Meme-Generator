import { useState } from 'react'
import {BsToggleOn, BsToggleOff} from 'react-icons/bs'


const DarkMode = () => {
    const [switchDark, setSwitchDark] = useState(true);
    const toggleSwitch = () => {
        setSwitchDark(!switchDark);
    }
    const dark = {
        backgroundColor: "darkslategrey",
        color: "ghostwhite"
    }
    
    const light =  {
        backgroundColor: "lightgrey"
    }
    const backgroundMode = switchDark ? light: dark;

  return (
    <section style={backgroundMode}>
        <h1>Dark Mode</h1>
        <div onClick={toggleSwitch}>
            {switchDark ? <BsToggleOff /> : <BsToggleOn/>}
        </div>
    </section>
  )
}

export default DarkMode