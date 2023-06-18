import React, { useState } from 'react';

const Boxs = (props) => {

  const [on, setOn] = useState(props.on);

  let styles = {
    backgroundColor: on ? "black" : 'transparent',
    color: "dodgerblue",
    fontWeight: 900,
    fontSize: "32px",
    margin: 0
  }

  const toggleBg = () => {
    setOn(prevOn => !prevOn)
  }
  
  return (
   

    <div 
      // onClick={toggleBg}
      className='box' 
      style={styles}
      onClick={() => props.toggle(props.id)}
    >{props.texts}</div>
  );
};

export default Boxs;
