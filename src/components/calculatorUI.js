import React, { Component, useState } from 'react';
import './calculator.css';

 function CalculatorDesign(){  
    var inputValue=document.getElementById("input-box");
    inputValue=0;
    const display=(element) => {
        inputValue+=element.target.value;
        (String(inputValue.slice(0,1))==="0")?inputValue=inputValue.slice(1,inputValue.length):inputValue=inputValue;
        document.getElementById("input-box").value=inputValue;
       
        console.log(inputValue);
    }
    const calculate=()=>{
                    let first=String(inputValue.slice(0,1));
                    let evaluate=(first==="0")?String(inputValue.slice(1,inputValue.length)):String(inputValue);
                    inputValue=eval(evaluate);
                    document.getElementById("input-box").value=inputValue;
                    console.log(inputValue);
            }
            function del(){
                let dummy=inputValue;
                inputValue=dummy.toString().slice(0,-1);
                document.getElementById("input-box").value=inputValue;
                console.log(inputValue);
            }
            function clear(){
                inputValue="";
                document.getElementById("input-box").value=inputValue;
            }
    
        return (
            <div className='full'>
                <div className='upper'>
                    <div className='upperin'>
                        <h1> Calculation</h1>
                    </div>
                    <input 
                    type="text" 
                    className='upperlower' 
                    id="input-box" 
                    name="number"
                    value={inputValue}
                     />
                </div>
                <div className='lower'>
                        <button onClick={display} className='mt-1 rounded-circle' value="9">9</button>
                        <button onClick={display} className=' rounded-circle'value="8">8</button>
                        <button onClick={display} className=' rounded-circle' value="7">7</button>
                        <button onClick={del} className=' rounded-circle'>Del</button><br/>
                        <button onClick={display} className=' rounded-circle' value="4">4</button>
                        <button onClick={display} className=' rounded-circle' value="5">5</button>
                        <button onClick={display} className=' rounded-circle' value="6">6</button>
                        <button onClick={display} className=' rounded-circle' value="/">/</button>
                        <button onClick={display} className=' rounded-circle' value="1">1</button>
                        <button onClick={display} className=' rounded-circle' value="2">2</button>
                        <button onClick={display} className=' rounded-circle' value={3}>3</button>
                        <button onClick={display} className=' rounded-circle' value="-">-</button>
                        <button onClick={display} className=' rounded-circle' value="0">0</button>
                        <button onClick={display} className='mt-2 rounded-circle' value=".">.</button>
                        <button onClick={calculate} className='mt-2 rounded-circle'>=</button>
                        <button onClick={display} className='mt-2 rounded-circle' value="+">+</button><br/>
                        <button onClick={display} className='mt-2 rounded-circle' value="00">00</button>
                        <button onClick={display} className='mt-2 rounded-circle' value="*">*</button>
                        <button onClick={clear} className='mt-2 rounded-circle ac' >AC</button>

                </div>
            </div>
        );
        }
export default CalculatorDesign;