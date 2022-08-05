import React from 'react'
import Tictactoe from '../components/tictactoe/App'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'

const TicTacToeGame = () => {
  return (
    <motion.div 
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
     <Tictactoe />
    </motion.div>
  )
}
export default TicTacToeGame
