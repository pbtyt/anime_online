import React, { useContext, useState } from 'react'

import styles from './DropDown.module.css'

import DefaultButton from '../DefaultButton/DefaultButton'

import { PopupContext } from '../../../providers/PopupProvider'

const DropDown = ( {displayText="None", sectionsNames = ["Menu1", "Menu2"]} ) => {

	const [isOpen, setIsOpen] = useState(false)
	const { animeTitle, setLocalStorageData } = useContext(PopupContext)

	return (
		<div className={styles.dropdown}>
			<DefaultButton buttonText={ displayText } onClick={()=>setIsOpen(!isOpen)}/>

			{isOpen && (
				<ul className={styles.menu}>
					{
						sectionsNames.map((sectionName, index) => (
							// !TODO: localStorage
							<li className={styles.menuItem}
								onClick={()=>{
									setLocalStorageData(
										() => {
											const item = window.localStorage.getItem(animeTitle)
											console.log(item)
											if (item)
												return { ...JSON.parse(item), ...{[displayText]: sectionName} }
											else
												return {[displayText]: sectionName}
										}
									);
									
									setIsOpen(false);
								}}
							
								key={index}
							>
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
