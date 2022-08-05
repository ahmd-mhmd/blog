import React, { useState } from 'react'
import Text from './Text'
import styles from './markdown.module.css'

const Markdown = () => {
  const [input, setInput] = useState('# React Markdown \n## title2 \n### features: \n*bold* text \n_italic_ text \n~crossed~ text \nsome -> block quote \n[Google](https://www.google.com)')  
  const handleInput = e => {
    setInput(e.target.value)
  }

  return (
    <div className={styles.parent}>
      <div className={styles.titleTextbox}>
        editor
      </div>
      <textarea 
        className={styles.textarea}
        onChange={handleInput}
        value={input} />
      <div className={styles.finalText}>
        <div className={styles.titlePreview}>
          preview
        </div>
        <div>
          <Text input={input}/>
        </div>
      </div>
    </div>
  )
}

export default Markdown
