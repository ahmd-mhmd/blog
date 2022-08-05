import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import styles from '../styles/nav.module.css'
import { useRouter } from "next/router"
import Modal from "./modal"

const Nav = () => {
	const [isOpened, setisOpened] = useState(false)
	const route = useRouter()

	const handleOpen = () => {
		setisOpened(prev => !prev)
	}

  return (
		<>
			<nav className={styles.nav}>
				<h1>Ahmad</h1>
				<div className={styles.links}>
					<Link href='/'><a className={route.pathname === '/' ? styles.active : styles.link}>Home</a></Link>
					<Link href='/calculator'><a className={route.pathname === '/calculator' ? styles.active : styles.link}>Calculator</a></Link>
					<Link href='/markdown'><a className={route.pathname === '/markdown' ? styles.active : styles.link}>Markdown</a></Link>
					<Link href='/tictactoe'><a className={route.pathname === '/tictactoe' ? styles.active : styles.link}>Tic Tac Toe</a></Link>
				</div>
				<div className={styles.phoneNav} onClick={handleOpen}>
					{ isOpened ? 
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg> :
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
					</svg>}
				</div>
				<AnimatePresence
					initial={true}
					onExitComplete={() => {}}
					exitBeforeEnter={true}
				>
					{ isOpened && <Modal /> }
				</AnimatePresence>
			</nav>
		</>
  )
}

export default Nav
