import React from 'react'
import styles from '../styles/nav.module.css'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Modal = () => {
	const route = useRouter()

  return (
			<div className={styles.backdrop}>
				<motion.div 
					className={styles.modal}
					initial={{
						y: '-100vh'
					}}	
					animate={{
						y: 0
					}}
					exit={{
						y: '100vh'
					}}
				>
					<Link href='/'><a className={route.pathname === '/' ? styles.active : styles.link}>Home</a></Link>
					<Link href='/calculator'><a className={route.pathname === '/calculator' ? styles.active : styles.link}>Calculator</a></Link>
					<Link href='/markdown'><a className={route.pathname === '/markdown' ? styles.active : styles.link}>Markdown</a></Link>
					<Link href='/tictactoe'><a className={route.pathname === '/tictactoe' ? styles.active : styles.link}>Tic Tac Toe</a></Link>
				</motion.div>
			</div>
  )
}

export default Modal
