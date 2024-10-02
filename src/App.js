import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Calculator!</h1>
        <NumberPad />
      </header>
    </div>
  );
}

function NumberPad(){

  const [num, setNum] = useState("")
  const [operator, setOperator] = useState("")
  const [total, setTotal] = useState(0)

  function handleSetOperator(op){
    setOperator(op)
  }

  function handleSetNumber(number){
    setNum((prev) => prev + number)
    
}
  

  function handleEquation(){

    const numValue = parseFloat(num); // Parse num as float
    if(operator === ""){
      setTotal(numValue)
    }
    
    switch(operator){
      case '+':
        setTotal((prevTotal) => prevTotal + numValue)
        break;
      case '-':
        setTotal((prevTotal) => prevTotal - numValue)
        break;
      case '*':
        setTotal((prevTotal) => prevTotal * numValue)
        break;
      case '/':
        setTotal((prevTotal) => prevTotal / numValue)
        break;
    }
    setNum("")
  }

  function handleAllClear(){
    setNum("")
    setOperator("")
    setTotal("")
  }

  return(
    <div>
      <div> 
         {Array.from({length: 10}, (_, i) => i ).map(num=><button value={num} key={num} onClick={(e) => handleSetNumber(Number(e.target.value))}>{num}</button>)}
      </div>

      <div>
        <button value={'+'} onClick={(e) => handleSetOperator(e.target.value)}>+</button>
        <button value={'-'} onClick={(e) => handleSetOperator(e.target.value)}>-</button>
        <button value={'*'} onClick={(e) => handleSetOperator(e.target.value)}>*</button>
        <button value={'/'} onClick={(e) => handleSetOperator(e.target.value)}>/</button>

        <button value={'='} onClick={handleEquation}>=</button> 
        <button value={'ac'} onClick={handleAllClear}>AC</button>       
      </div>
      <p>{num} {operator} {num}</p>
      <p>Your total is: {total}</p>
    </div>
  )
}

