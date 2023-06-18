import Box from './Box';
import { useState } from 'react'
import Boxs from './Boxs'


const Boxes = () => {

const [squares, setSquares] = useState(Box);
const toggle = (id) => {
  alert(id)
}

const squareElements = squares.map(square => (
        <Boxs 
          toggle={toggle}

          on={square.on} 
          id={square.id}
          key={square.id} 

          texts={square.text}

          />
    ));
    
  return (
    <div>
        {squareElements}
    </div>
  )
}

export default Boxes;