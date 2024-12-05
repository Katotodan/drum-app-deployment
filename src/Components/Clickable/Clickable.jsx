import React from 'react'
import "./clickable.css"

const Clickable = ({keyPressed}) => {
  const handleClick = (e)=>{
    switch (e){
      case "Q":
        keyPressed("Q")
        break;

      case "W":
        keyPressed("W")
        break;
      case "E":
        keyPressed("E")
        break;
      case "A":
        keyPressed("A")
        break;
      case "S":
        keyPressed("S")
        break;
      case "D":
        keyPressed("D")
        break;
      case "Z":
        keyPressed("Z")
        break;
      case "X":
        keyPressed("X")
        break;
      case "C":
        keyPressed("C")
        break;
      default:
        return;   
          
    }
  }
  return (
    <div className='drum-pad-container'>
      <button className='drum-pad' onClick={() => handleClick("Q")}>Q</button>
      <button className='drum-pad' onClick={() => handleClick("W")}>W</button>
      <button className='drum-pad' onClick={() => handleClick("E")}>E</button>
      <button className='drum-pad' onClick={() => handleClick("A")}>A</button>
      <button className='drum-pad' onClick={() => handleClick("S")}>S</button>
      <button className='drum-pad' onClick={() => handleClick("D")}>D</button>
      <button className='drum-pad' onClick={() => handleClick("Z")}>Z</button>
      <button className='drum-pad' onClick={() => handleClick("X")}>X</button>
      <button className='drum-pad' onClick={() => handleClick("C")}>C</button>
    </div>
  )
}

export default Clickable
