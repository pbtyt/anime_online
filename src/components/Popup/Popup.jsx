import React, {useContext, useRef, useEffect} from 'react'
import styles from './Popup.module.css'

import { PopupContext } from '../../providers/PopupProvider'
import DropDown from '../ui/DropDown/DropDown'

import DefaultButton from '../ui/DefaultButton/DefaultButton'

import useLocalStorage from '../../hooks/useLocalStorage'

const Popup = () => {
	
	const {isOpenPopup, setIsOpenPopup, animeTitle, localStorageData} = useContext(PopupContext)
	const { removeValue, setValue } = useLocalStorage(animeTitle, {})

	return isOpenPopup && (
		<div className={styles.popupWrapper}>
			
			<div className={styles.popupContent}>
				<h3 className={styles.currentEditTitle}>
					Current Edit Anime Title: {animeTitle}
				</h3>

				<div className={styles.dropdownsMenu}>
					<DropDown
						displayText='Status'
						sectionsNames={["Watching", "Rewatching", "Completed", "Skipping"]}
					/>
					<DropDown
						displayText='Rating'
						sectionsNames={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
					/>
				</div>
				
				<div className={styles.buttons}>
					<DefaultButton buttonText={"Cancel"} onClick={()=>{setIsOpenPopup(false); removeValue()}}/>
					<DefaultButton buttonText={"Save"} onClick={()=>{ setIsOpenPopup(false); setValue(localStorageData) }}/>
				</div>
			</div>
		</div>
	)
}

export default Popup
