import React, { useEffect, useState } from 'react'
import styles from './tictactoe.module.css'

export default function Table({setturn, turn, play, setPlay, setxScore, setoScore, tableContent, setisdraw}) {

  const victory = () => {
    setPlay(prev => prev = false)
    turn ? setxScore(prev => prev + 1) : setoScore(prev => prev + 1)
  }
  const draw = () => {
    setPlay(prev => prev = false)
    setisdraw(prev => prev = true)
  }

  const handleClick = e => {
    turn ? tableContent[e.target.id] = '×' : tableContent[e.target.id] = 'o'
    setturn(prev => !prev)
    if (tableContent[0] === tableContent[1] && tableContent[1] === tableContent[2]){
        if (tableContent[0] === '×' || tableContent[0] === 'o'){
            victory()
        }
    }
    else if (tableContent[3] === tableContent[4] && tableContent[3] === tableContent[5]){
        if (tableContent[3] === '×' || tableContent[3] === 'o'){
            victory()
        }
    }
    else if (tableContent[6] === tableContent[7] && tableContent[6] === tableContent[8]){
        if (tableContent[6] === '×' || tableContent[6] === 'o'){
            victory()
        }
    }
    else if (tableContent[0] === tableContent[3] && tableContent[0] === tableContent[6]){
        if (tableContent[0] === '×' || tableContent[0] === 'o'){
            victory()
        }
    }
    else if (tableContent[1] === tableContent[4] && tableContent[1] === tableContent[7]){
        if (tableContent[1] === '×' || tableContent[1] === 'o'){
            victory()
        }
    }
    else if (tableContent[2] === tableContent[5] && tableContent[2] === tableContent[8]){
        if (tableContent[2] === '×' || tableContent[2] === 'o'){
            victory()
        }
    }
    else if (tableContent[0] === tableContent[4] && tableContent[0] === tableContent[8]){
        if (tableContent[0] === '×' || tableContent[0] === 'o'){
            victory()
        }
    }
    else if (tableContent[2] === tableContent[4] && tableContent[2] === tableContent[6]){
        if (tableContent[2] === '×' || tableContent[2] === 'o'){
            victory()
        }
    }
    else if (tableContent.every(elem => elem != ' ')){
      draw()
    }
  }

  return (
    <div className={styles.table}>
      <ul className={styles.tableContent}>
        {tableContent.map((elem, index) => {
            if(elem === '×')
              return <li id={index} key={elem + index} style={{color: 'rgb(0, 128, 255)'}}>{elem}</li>
            else if (elem === 'o')
              return <li id={index} key={elem + index} style={{color: '#f00'}}>{elem}</li>
            else 
              return <li key={index} id={index} onClick={ play ? handleClick : () => {}}>{elem}</li>
        })}
      </ul>
    </div>
  )
}
