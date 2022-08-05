import React from 'react'
import skills from '../pages/data/skills.json'
import styles from '../styles/skills.module.css'
import {Image} from 'next/image'

const Skills = () => {
  return (
    <div>
			<ul className={styles.skills}>
				{skills.map((skill, index) => {
					return (
						<li key={index} className={styles.listitem}>
							{Boolean(skill.logo) && <Image src={skill.logo} alt={skill.skill}/>}
							<span>{skill.skill}</span>
						</li>
					)
				})}
			</ul>
    </div>
  )
}

export default Skills
