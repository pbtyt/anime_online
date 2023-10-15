import React from 'react'
import { useState } from 'react'

import styles from './DropDown.module.css'

import DefaultButton from '../DefaultButton/DefaultButton'

const DropDown = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.dropdown}>
			<DefaultButton buttonText={"Folder"} onClick={()=>setIsOpen(!isOpen)}/>

			{isOpen && (
				<ul className={styles.menu}>
					<li className={styles.menuItem}>
						<button>Menu1</button>
					</li>

					<li className={styles.menuItem}>
						<button>Menu2</button>
					</li>
				</ul>
			)}
		</div>
	)
}

export default DropDown
