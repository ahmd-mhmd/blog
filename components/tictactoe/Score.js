import React from 'react'
import styles from './tictactoe.module.css'

export default function Score({ xScore, oScore }) {
  return (
      <div className={styles.results}>
        <div className={styles.xResult}>
          × : {xScore}
        </div>
        <div className={styles.oResult}>
          o : {oScore}
        </div>
      </div>
  )
}
