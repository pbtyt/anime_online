import React from 'react'
import { useState } from 'react'

import styles from './DropDown.module.css'

import DefaultButton from '../DefaultButton/DefaultButton'

import useLocalStorage from '../../../hooks/useLocalStorage' //!!!помещать по клику на menuItem в localStorage

const DropDown = ( {displayText="None", sectionsNames = ["Menu1", "Menu2"]} ) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.dropdown}>
			<DefaultButton buttonText={ displayText } onClick={()=>setIsOpen(!isOpen)}/>

			{isOpen && (
				<ul className={styles.menu}>
					{
						sectionsNames.map((sectionName, index) => (
							<li className={styles.menuItem} onClick={()=>setIsOpen(false)} key={index}>
								<button>{sectionName}</button>
							</li>		
						))
					}
				</ul>
			)}
		</div>
	)
}

export default DropDown
