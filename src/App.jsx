import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('');

  const changeColor = (newColor) => {
    setColor(newColor);
  };



  return (
    <>
      <div style={{ height: '100vh', backgroundColor: color }} className="d-flex justify-content-center align-items-center">
        <div className='d-grid'>
          <button className="btn btn-danger btn-lg " onClick={() => changeColor('red')} > Red </button>
          <br />
          <button className="btn btn-warning btn-lg" onClick={() => changeColor('yellow')} > Yellow </button>
          <br />
          <button className="btn btn-success btn-lg "onClick={() => changeColor('green')} > Green</button>
          <br />
          <button className="btn btn-primary btn-lg " onClick={() => changeColor('blue')} >  Blue </button>
          <br />
          <button className="btn btn-light btn-lg " onClick={() => changeColor('white')} >  Reset </button>
        </div>
      </div>

    </>
  )
}

export default App
