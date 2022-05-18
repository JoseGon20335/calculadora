import React, {useState } from 'react';
import operacion from './operaciones';
import './App.css';

const App = () => {

  const [nega, setNega] = useState(false);

  const [resul, setResul] = useState("");

  const handleClick = (e) => {
    console.log(e)
    setResul(resul.concat(e.target.name));
  }

  const clear = () => {
    setResul("");
  }

  const borrar = () => {
    setResul(resul.slice(0,resul.length-1));
  }

  const calcularClick = () => {

    let numero1 = resul;
    let verdaderofalso = nega;

    console.log("-*********-*********-******-entro",numero1,verdaderofalso)

    let valor = operacion(numero1,verdaderofalso);

    setNega(false);
    setResul(valor);
  }

  const negativador = () => {

    setNega(true);

    let valor = resul

    console.log("entro")

    if(resul > 0){
      console.log("entro if")
      valor = "-" + resul
    } else{
      console.log("entro else")
      valor.substring(1);
    }

    console.log(valor);
    setResul(valor)

  }

  return (
    <div className="calcu">
      <form>
        <input type="text" value={resul} />
      </form>
      <div className='teclado'>
        <button className='especial' onClick={clear}>Clear</button>
        <button className='botonColorido' onClick={borrar}>C</button>
        <button className='botonColorido' name='/' onClick={handleClick}>/</button>
        <button className='boton' name='7' onClick={handleClick}>7</button>
        <button className='boton' name='8' onClick={handleClick}>8</button>
        <button className='boton' name='9' onClick={handleClick}>9</button>
        <button className='botonColorido' name='*' onClick={handleClick}>*</button>
        <button className='boton' name='4' onClick={handleClick}>4</button>
        <button className='boton' name='5' onClick={handleClick}>5</button>
        <button className='boton' name='6' onClick={handleClick}>6</button>
        <button className='botonColorido' name='-' onClick={handleClick}>-</button>
        <button className='boton' name='1' onClick={handleClick}>1</button>
        <button className='boton' name='2' onClick={handleClick}>2</button>
        <button className='boton' name='3' onClick={handleClick}>3</button>
        <button className='botonColorido' name='+' onClick={handleClick}>+</button>
        <button className='boton' name='0' onClick={handleClick}>0</button>
        <button className='boton' name='.' onClick={handleClick}>.</button>
        <button className='botonColorido' name='+/-' onClick={negativador}>+/-</button>
        <button className='botonColorido' name='%' onClick={handleClick}>%</button>
        <button className='especial2' onClick={calcularClick}>=</button>
      </div>
    </div>
  );
}

export default App;
