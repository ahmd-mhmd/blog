import React from 'react'
import Markdown from '../components/markdown/markdown'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'

const markdown = () => {
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
        <div style={{height: '4rem'}} />
        <Markdown />
      </motion.div>
  )
}

export default markdown
