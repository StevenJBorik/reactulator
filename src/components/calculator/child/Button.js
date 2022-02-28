import React from 'react'
import './button.scss'

// Button components with functions for performing calculations and calculator operations
// based on our array map key/values 

const Button = ({title,value, input, setInput, output, setOutput}) => {
  
  const displayNumber = (e) => {
    e.preventDefault(); 
    let number = (input += e.target.value)
    if (!number.includes('value')) {
      setInput(number.replace(/ˆ0/, '')); 
    }
  }; 

  const clearNumber = () => {
    setInput('0'); 
    setOutput('0'); 
  }; 

  const deleteLastDigit = () => {
    setInput(input.slice(0, -1))
  }; 

  const formatAsPercentage = () => {
    setInput(input/100)
  }; 

  const performCalculation = () => {
    try {
      let calculation = Function('return ' + input)
      setOutput(calculation)  
    } 
    catch (error) {
      setOutput(input.slice(0, -1))
    }
    
  }; 

  return (
    <button 
      value= {value}
      onClick = { value === "ac" ? clearNumber : displayNumber &&
                  value === "delete" ? deleteLastDigit : displayNumber &&
                  value === "%" ? formatAsPercentage : displayNumber &&
                  value === "=" ? performCalculation : displayNumber}
    >{title}
    </button>
  )
}

export default Button