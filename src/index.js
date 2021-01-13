/* eslint-disable no-extra-semi */
/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Clear DevTool [HMR] messages:
import {setLogLevel} from 'webpack/hot/log';
setLogLevel('error');

// Sass:
import './sass/main.scss';

//React:
import React from 'react';
import ReactDOM from 'react-dom';



const buttons = [
    {
      name : 'AC',
      id : 'clear',
      style : 'keyboard__button_clear',
      key : 'AC'
    },
    {
      name : '%',
      id : 'perc',
      style : 'keyboard__button_perc',
      key : '%'
    },
    {
      name : '/',
      id : 'divide',
      style : 'keyboard__button_divide',
      key : '/'
    },
    {
      name : 'x',
      id : 'multiply',
      style : 'keyboard__button_multiply',
      key : '*'
    },
    {
      name : '-',
      id : 'subtract',
      style : 'keyboard__button_subtract',
      key : '-'
    },
    {
      name : '+',
      id : 'add',
      style : 'keyboard__button_add',
      key : '+'
    },
    {
      name : '=',
      id : 'equals',
      style : 'keyboard__button_equals',
      key : '='
    },
    {
      name : 9,
      id : 'nine',
      style : '',
      key : '9'
    },
    {
      name : 8,
      id : 'eight',
      style : '',
      key : '8'
    },
    {
      name : 7,
      id : 'seven',
      style : '',
      key : '7'
    },
    {
      name : 6,
      id : 'six',
      style : '',
      key : '6'
    },
    {
      name : 5,
      id : 'five',
      style : '',
      key : '5'
    },
    {
      name : 4,
      id : 'four',
      style : '',
      key : '4'
    },
    {
      name : 3,
      id : 'three',
      style : '',
      key : '3'
    },
    {
      name : 2,
      id : 'two',
      style : '',
      key : '2'
    },
    {
      name : 1,
      id : 'one',
      style : '',
      key : '1'
    },
    {
      name : 0,
      id : 'zero',
      style : '',
      key : '0'
    },
    {
      name : '.',
      id : 'decimal',
      style : '',
      key : '.'
    }
  ]
 

const getMathResult = {
    '/':(bufferVal,currentVal) => bufferVal /= currentVal,
    '*':(bufferVal, currentVal) => bufferVal *= currentVal,
    '-':(bufferVal, currentVal) => bufferVal -= currentVal,
    '+':(bufferVal, currentVal) => bufferVal += currentVal,
    '=':(bufferVal, currentVal) => bufferVal,
}




function Keyboard ({output}) {
  
  const [underlinedOperator, setUnderlinedOperator] = React.useState(null);
  
  const prev = React.useRef('');
  const input = React.useRef('');
  const buffer = React.useRef(0);
  
  
  // **************************************************
  
  
  const getButton = (key) => {
    // Handle Numbers and dot
    if(/[0-9|\.]/.test(key)){
      handleNumbers(key);
    }
    
    // Handle Operators
    if(/[\/\*\-\+]/.test(key)){
      handleOperators(key);
    }
    
    // Handle Equal
    if(key == '='){
      handleEqual(key);
    }
    
    // Handle Reset
    if(key === 'AC'){
      reset();
    }
  }
  
  
  // **************************************************
  
  const reset = () => {
    output('0');
    buffer.current = 0;
    input.current = '';
    prev.current = ''
    setUnderlinedOperator(null);
  }
  
  const handleNumbers = (n) => {
    // Display Numbers typing
    
    // Multiple Zero controller:
    if(n == '0' && input.current.length == 0) return;
    
    // Multiple period controller:
    if(input.current.includes('.') && n == '.') return;
    
    output(input.current += n);
  }
  
  const handleEqual = () => {
    let sum;
      
      if(/[\/\*\-\+]/.test(prev.current) && underlinedOperator === '-'){
        sum = getMathResult[prev.current](buffer.current, Number(-input.current));       
      }
      else{
        sum = getMathResult[underlinedOperator](buffer.current, Number(input.current));       
      }

      output(sum);
      buffer.current = sum;
      input.current = '';
      prev.current = '';
  }
  
  const handleOperators = (operator) => {
    
      // Underline Current Operator
      setUnderlinedOperator(operator);  
    
      // Does Math  based on Previous operator, buffer value val and current number value
      if(underlinedOperator && input.current){

          const sum = getMathResult[underlinedOperator](buffer.current, Number(input.current)); 
          // display claculated value don the screen:
          output(sum);
          
          buffer.current = sum;
          input.current = ''; 
      }
      // define buffer value when operator is clicked for the first time
      else{
        buffer.current += Number(input.current);
        input.current = '';
      }
    
      
     // Define Previously selected operator:
      prev.current = underlinedOperator;
  }
  
  
  // **************************************************

  return (
    <main className="claculator__keyboard keyboard">
          {buttons.map(button => {
            return (
              <button 
                key={button.key}
                id={button.id} 
                type="button" 
                name={button.key} 
                className={`keyboard__button ${button.style} ${underlinedOperator == button.key ? 'selected' : ''}`}
                onClick={(event) => getButton(event.target.name)}
                >
                {button.name}
              </button>
            )
          })}
   </main>
  )
};


 function Screen ({sum}){
   
   return (
     <header  className="claculator__screen screen">
         <div id="display" className="screen__data" >{sum}</div>
     </header>
   )
 }

  
  
  function Calculator () {
    const [output, setOutput] = React.useState('0');
    
    const getInput = (n) => setOutput(n);

    return (
      <div className="claculator">
        <Screen sum={output}/>
        <Keyboard output={getInput}/>
      </div>
    )
  }
  
  ReactDOM.render(<Calculator />, document.getElementById('root'));




module.hot.accept();