import Skills from '../components/skills'
import Projects from '../components/projects'
import styles from '../styles/Home.module.css'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion' 

export default function Home() {
  const scroll = () => {
    scrollBy(0, window.innerHeight)
  }
  
  return (
      <motion.div
        initial={{
          x: -200
        }}
        animate={{
          x: 0
        }}
        exit={{
          x: 300
        }}
      >
        <header className={styles.header}>
          <h1>Ahamd Mohammad</h1>
          <h1>I'm a <span className={styles.blue}>frontend</span> web developer</h1>
          <a className={styles.darr} onClick={scroll}>&gt;</a>
        </header>
        <section className={styles.skills}>
          <h1 className={styles.title}><div>Skills</div></h1>
          <Skills />
        </section>
        <hr/>
        <section className={styles.projects}>
          <h1 className={styles.title}><div>My Work</div></h1>
          <Projects />
        </section>
      </motion.div>
  )
}
