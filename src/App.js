import React, { Component, useState } from 'react';
import './App.css';

const App = () => {

  const [resul, setResul] = useState("");

  const handleClick = (e) => {
    setResul(resul.concat(e.target.name));
  }

  const clear = () => {
    setResul("");
  }

  const borrar = () => {
    setResul(resul.slice(0,resul.length-1));
  }

  const calcularClick = () => {
    setResul(eval(resul));
  }

  return (
    <div className="calcu">
      <form>
        <input type="text" value={resul} />
      </form>
      <div className='teclado'>
        <button className='especial' onClick={clear}>Clear</button>
        <button className='boton' onClick={borrar}>C</button>
        <button className='boton' name='/' onClick={handleClick}>/</button>
        <button className='boton' name='7' onClick={handleClick}>7</button>
        <button className='boton' name='8' onClick={handleClick}>8</button>
        <button className='boton' name='9' onClick={handleClick}>9</button>
        <button className='boton' name='*' onClick={handleClick}>*</button>
        <button className='boton' name='4' onClick={handleClick}>4</button>
        <button className='boton' name='5' onClick={handleClick}>5</button>
        <button className='boton' name='6' onClick={handleClick}>6</button>
        <button className='boton' name='-' onClick={handleClick}>-</button>
        <button className='boton' name='1' onClick={handleClick}>1</button>
        <button className='boton' name='2' onClick={handleClick}>2</button>
        <button className='boton' name='3' onClick={handleClick}>3</button>
        <button className='boton' name='+' onClick={handleClick}>+</button>
        <button className='boton' name='0' onClick={handleClick}>0</button>
        <button className='boton' name='.' onClick={handleClick}>.</button>
        <button className='especial2' onClick={calcularClick}>=</button>
      </div>
    </div>
  );
}

export default App;
