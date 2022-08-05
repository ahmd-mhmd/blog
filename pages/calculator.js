import styles from '../styles/calc.module.css'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'


function Calc() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const [history, setHistory] = useState([])
  function del(){
    setValue(value.split('').slice(0, value.split('').length - 1).join(''))
  }
  function ac(){
    setValue('')
    setResult('')
  }
  const add = () => {
    if (result.length != 0){
      setValue(result + '+')
      setResult('')
    } else if(Boolean(value)) {
			if(value[value.length - 1].search(/\d/) == 0 ){
				setValue(value + '+')
			}
		}
  }
  const minus = () => {
    if (result.length != 0){
      setValue(result + '-')
      setResult('')
    } else if(Boolean(value)){ 
			if(value[value.length - 1].search(/\d|[/\*]/) == 0 ){
				setValue(value + '-')
			}
		}
  }
  const devide = () => {
    if (result.length != 0){
      setValue(result + '/')
      setResult('')
    } else if(Boolean(value)){ 
			if (value[value.length - 1].search(/\d/) == 0 ){
				setValue(value + '/')
			}
		}
  }
  const times = () => {
    if (result.length != 0){
      setValue(result + '*')
      setResult('')
    } else if(Boolean(value)){ 
			if (value[value.length - 1].search(/\d/) == 0 ){
				setValue(value + '*')
			}
		}
  }
  const decimal = () => {
		if (Boolean(value)){
			if (value[value.length - 1].search(/\d/) == 0 ){
				setValue(value + '.')
			}
		}
  }
  const solve = () => {
    const newArr = value.replace(/(\*|\/|\+|\-)/g, ' $1 ').split(' ').filter(elem => elem != '')

    let i = 0
    while(i < newArr.length){
      if (newArr[i] == '*' && newArr[i + 1] != '-'){
        newArr.splice(i - 1, 3, JSON.stringify(newArr[i - 1] * newArr[i + 1]));
        i = 0
      } else if (newArr[i] == '/' && newArr[i + 1] != '-'){
        newArr.splice(i - 1, 3, JSON.stringify(newArr[i - 1] / newArr[i + 1]));
        i = 0
      } else if(newArr[i] == '*' && newArr[i + 1] == '-') {
        newArr.splice(i - 1, 4, JSON.stringify(newArr[i - 1] * newArr[i + 2] * -1));
        i = 0
      } else if(newArr[i] == '/' && newArr[i + 1] == '-'){
        newArr.splice(i - 1, 4, JSON.stringify(newArr[i - 1] / newArr[i + 2] * -1));
        i = 0
      }
      else{
        i++ 
      }
    }
    
    i = 0
    while(i < newArr.length){
      if(newArr[i] == '+'){
        newArr.splice(i - 1, 3, JSON.stringify(parseFloat(newArr[i - 1]) + parseFloat(newArr[i + 1])));
        i = 0
      } else if (newArr[i] == '-'){
        newArr.splice(i - 1, 3, JSON.stringify(parseFloat(newArr[i - 1]) - parseFloat(newArr[i + 1])));
        i = 0
      } else {
        i++
      }
    }

    if(newArr.length == 1){
      setResult(newArr[0])
			setHistory(prev => prev.concat({expression: value, answer: newArr[0]}))
    } else {
      setResult('error occured')
    }
  }
  const handleBtnClick = (num) => {
    return () => {
      if(result.length != 0){
        setValue(result); 
				setResult('');
			}
			setValue(value + num)
    }
  }

  return (
    <motion.div 
      className={styles.parent}
      initial={{
        x: -200
      }}  
      animate={{
        x: 0
      }}
      exit={{
        x: 100
      }}
    >
      <div id='calculator' className={styles.calculator}>
        <div id='screen' className={styles.screen}>
          <div id='value' className={styles.value}>{value.replace(/\*/g, '×').replace(/\//g, '÷')}</div>
          <hr/>
          <div id='result' className={styles.result}>{result}</div>
        </div>
        <button id='del' className={styles.del} onClick={del}>DEL</button>
        <button id='ac' className={styles.ac} onClick={ac}>AC</button>
        <button id='plus' className={styles.plus} onClick={add}>+</button>
        <button id="btn1" className={styles.btn1} onClick={handleBtnClick('1')}>1</button>
        <button id="btn2" className={styles.btn2} onClick={handleBtnClick('2')}>2</button>
        <button id="btn3" className={styles.btn3} onClick={handleBtnClick('3')}>3</button>
        <button id='minus' className={styles.minus} onClick={minus}>-</button>
        <button id="btn4" className={styles.btn4} onClick={handleBtnClick('4')}>4</button>
        <button id="btn5" className={styles.btn5} onClick={handleBtnClick('5')}>5</button>
        <button id="btn6" className={styles.btn6} onClick={handleBtnClick('6')}>6</button>
        <button id='times' className={styles.times} onClick={times}>×</button>
        <button id="btn7" className={styles.btn7} onClick={handleBtnClick('7')}>7</button>
        <button id="btn8" className={styles.btn8} onClick={handleBtnClick('8')}>8</button>
        <button id="btn9" className={styles.btn9} onClick={handleBtnClick('9')}>9</button>
        <button id='devide' className={styles.devide} onClick={devide}>÷</button>
        <button id='btn0' className={styles.btn0} onClick={handleBtnClick('0')}>0</button>
        <button id='decimal' className={styles.decimal} onClick={decimal}>.</button>
        <button id='solve' className={styles.solve} onClick={solve}>=</button>
      </div>
      <fieldset className={styles.fieldset}>
        <legend>History</legend>
        {history.map((elem, index) => {
          return (
            <div key={index}>
              <span style={{'color': '#0F6987'}}>expression: </span> <span style={{"color": "#fffc"}}>{elem.expression.replace(/\*/g, '×').replace(/\//g, '÷')} </span><br/>
              <span style={{'color': '#0F6987'}}>result: </span> <span style={{"color": "#fffc"}}>{elem.answer}</span>
              <hr style={{'borderColor': '#fff4'}}/>
            </div>
          )
        })}
      </fieldset>
    </motion.div>
  );
}

export default Calc;
