import './App.scss';
import React from 'react'
import Calculator from './components/calculator/parent/Calculator';
const App = () => {
  return (
    <div className='app'>
      <h1>UT Dallas Comet Colored Reactulator!</h1>
      <Calculator/>
    </div>
  )
}
export default App 