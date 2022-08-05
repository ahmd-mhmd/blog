import React from 'react'
import styles from './markdown.module.css'

const Text = ({input}) => {
  return (
    <div>
      {
        input.split('\n').map(str => (
					str.split(' ')[0] == '#' ?
					<h1 className={styles.title1}>{str.split(' ').splice(1,str.split(' ').length).join(' ')}</h1>:

					str.split(' ')[0] == '##' ?
					<h1 className={styles.title2}>{str.split(' ').splice(1,str.split(' ').length).join(' ')}</h1>:

					str.split(' ')[0] == '###' ?
					<h1 className={styles.title3}>{str.split(' ').splice(1,str.split(' ').length).join(' ')}</h1>:

					Boolean(str.match(/(.*)(\*)(.+)(\*)(.*)/gi)) ?
					<div>
						<span>{str.replace(/(.*)(\*)(.+)(\*)(.*)/, '$1')}</span>
						<strong>{str.replace(/(.*)(\*)(.+)(\*)(.*)/, '$3')}</strong>
						<span>{str.replace(/(.*)(\*)(.+)(\*)(.*)/, '$5')}</span>
					</div> : 

					Boolean(str.match(/(.*)(_)(.+)(_)(.*)/gi)) ?
					<div>
						<span>{str.replace(/(.*)(_)(.+)(_)(.*)/, '$1')}</span>
						<i>{str.replace(/(.*)(_)(.+)(_)(.*)/, '$3')}</i>
						<span>{str.replace(/(.*)(_)(.+)(_)(.*)/, '$5')}</span>
					</div> :

					Boolean(str.match(/(.*)(\~)(.+)(\~)(.*)/gi)) ?
					<div>
						<span>{str.replace(/(.*)(\~)(.+)(\~)(.*)/, '$1')}</span>
						<s>{str.replace(/(.*)(\~)(.+)(\~)(.*)/, '$3')}</s>
						<span>{str.replace(/(.*)(\~)(.+)(\~)(.*)/, '$5')}</span>
					</div> : 

					str.split(' ').some(elem => elem == '->') ? 
					<div>
						<span>{str.replace(/(.*)(->)(.*)/, "$1")}</span>
						<div className={styles.blockQuote}>{str.replace(/(.*)(->)(.*)/, "$3")}</div>
					</div> : 

					str.split(' ').some(elem => Boolean(elem.match(/\[.+\]\(.+\)/))) ? 
					<div>
						<span>{str.replace(/(.*)(\[.+\]\(.+\))(.*)/, '$1 ')}</span>
						<a href={str.replace(/(.*)(\[.+\])(\()(.+)(\))(.*)/, '$4')} target='_blank'>{str.replace(/(.*)(\[)(.+)(\])(\(.+\))(.*)/, '$3')}</a>
						<span>{str.replace(/(.*)(\[.+\]\(.+\))(.*)/, ' $3')}</span>
					</div>
					:
					<span>{str}</span>
				))
      }
    </div>
  )
}

export default Text
