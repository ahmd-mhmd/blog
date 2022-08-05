import React from 'react'
// import skills from '../pages/data/skills.json'
import styles from '../styles/skills.module.css'
import Image from 'next/image'

const Skills = () => {
	const skills = [
		{
			"logo": "https://icon-library.com/images/html-5-icon/html-5-icon-6.jpg",
			"skill": "HTML"
		},
		{
			"logo": "https://icon-library.com/images/css3-icon/css3-icon-28.jpg",
			"skill": "CSS"
		},
		{
			"logo": "https://icon-library.com/images/js-icon/js-icon-24.jpg",
			"skill": "JavaScript"
		},
		{
			"logo": "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
			"skill": "React"
		},
		{
			"logo": "",
			"skill": "React Hooks" 
		},
		{
			"logo": "https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png",
			"skill": "React Router"
		},
		{
			"logo": "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
			"skill": "Next.js"
		},
		{
			"logo": "https://www.tpisoftware.com/tpu/File/html/202009/20200929151429/images/20200926171128.png",
			"skill": "Framer Motion"
		},
		{
			"logo": "",
			"skill": "React testing library"
		},
		{
			"logo": "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
			"skill": "Jest"
		},
		{
			"logo": "https://icon-library.com/images/icon-github/icon-github-14.jpg",
			"skill": "GitHub"
		},
		{
			"logo": "https://icon-library.com/images/github-icon-vector/github-icon-vector-15.jpg",
			"skill": "Git"
		}
	]
	
  return (
    <div>
			<ul className={styles.skills}>
				{skills.map((skill, index) => {
					return (
						<li key={index} className={styles.listitem}>
							{Boolean(skill.logo) && <Image src={skill.logo} layout='fill' alt={skill.skill}/>}
							<span>{skill.skill}</span>
						</li>
					)
				})}
			</ul>
    </div>
  )
}

export default Skills
