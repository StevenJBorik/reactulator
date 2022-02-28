import React, { useState } from 'react'
import Button from '../child/Button'
import "./calculator.scss"
import items from '../../calculatorData'

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
   


  return (
    <div className="container">
        <div className="screen">
            <div className="input">{input}</div>
            <div className="output"><span>=</span>{output}</div>
        </div>
        <div className="keypad">
            {items.map((item) => {
              return(
                <Button
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  input = {input}
                  setInput = {setInput}
                  output = {output}
                  setOutput = {setOutput}
                />
              )
            })}    
        </div>
    </div>
    
  )
}

export default Calculator