import styles from './tictactoe.module.css';
import { useState } from 'react';
import Score from './Score'
import Table from './Table';
import Turn from './Turn';
import PlayAgain from './PlayAgain';

function Tictactoe() {
  const [xScore, setxScore] = useState(0)
  const [oScore, setoScore] = useState(0)
  const [play, setPlay] = useState(true)
  const [xturn, setTurn] = useState(true)
  const [isdraw, setisdraw] = useState(false)
  const [tableContent, setTableContent] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);


  return (
    <div className={styles.parent}>
      <Score xScore={xScore} oScore={oScore} />
      <div className={styles.turn}>
        {play ? <Turn Turn={xturn}/> : 
        isdraw ? 'draw' :
        xturn ? 'o win' : '× win'}
      </div>
      <Table setturn={setTurn} turn={xturn} play={play} setPlay={setPlay} setoScore={setoScore} setxScore={setxScore} tableContent={tableContent} setisdraw={setisdraw}/>
      {play ? '' : <PlayAgain setPlay={setPlay} setTurn={setTurn} setTableContent={setTableContent} setisdraw={setisdraw} />}
    </div>
  );
}

export default Tictactoe;