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

  const [calc, setCalc] = useState({
    num1: "",
    operator: "",
    num2: "",
    total: 0
  })


  function handleSetOperator(op){
    setCalc((prev) => ({...prev, operator: op}))
  }

  function handleSetNumber(newNumber){
    if (calc.operator === ""){
      setCalc((prev) => ({ ...prev, num1: (prev.num1 === '0' ? '' : prev.num1) + newNumber }))
    }
    else{
      setCalc((prev) => ({...prev, num2: (prev.num2 === '0' ? '' : prev.num2) + newNumber }))
    }
    
}
  

  function handleEquation(){
    
    switch(calc.operator){
      case '+':
         setCalc((curr) => ({...curr, total: Number(curr.num1) + Number(curr.num2)}))
         break;
      case '-':
        setCalc((curr) => ({...curr, total: Number(curr.num1) - Number(curr.num2)}))
        break;
      case '*':
        setCalc((curr) => ({...curr, total: Number(curr.num1) * Number(curr.num2)}))
        break;
      case '/':
        setCalc((curr) => ({...curr, total: Number(curr.num1) / Number(curr.num2)}))
        break;
    }
  }

  function handleAllClear(){
    setCalc({
      num1: "",
      operator: "",
      num2: "", 
      total: 0
    })
  }

  return(
    <div>
      <div> 
         {Array.from({length: 10}, (_, i) => i ).map(num=><button value={num} key={num} onClick={(e) => handleSetNumber(Number(e.target.value))}>{num}</button>)}
      </div>

      <div>
        {(calc.total) ? (<button value={'ac'} onClick={handleAllClear}>AC</button> ) 
        : (
          <>
        <button value={'+'} onClick={(e) => handleSetOperator(e.target.value)}>+</button>
        <button value={'-'} onClick={(e) => handleSetOperator(e.target.value)}>-</button>
        <button value={'*'} onClick={(e) => handleSetOperator(e.target.value)}>*</button>
        <button value={'/'} onClick={(e) => handleSetOperator(e.target.value)}>/</button>
        <button value={'='} onClick={handleEquation}>=</button> 
        </>
        )
}
      </div>
      <p>{calc.num1} {calc.operator} {calc.num2} </p>
      <p>{calc.total !== 0 && (<p>Your total is: {calc.total.toFixed(2)}</p>)}</p>
    </div>
  )
}

