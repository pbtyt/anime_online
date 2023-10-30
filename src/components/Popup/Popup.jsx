import React, {useContext, useRef, useEffect} from 'react'
import styles from './Popup.module.css'

import { PopupContext } from '../../providers/PopupProvider'

import DropDown from '../ui/DropDown/DropDown'
import { GrFormClose } from 'react-icons/gr'
import CancelButton from '../ui/CancelButton/CancelButton'
import DefaultButton from '../ui/DefaultButton/DefaultButton'

const Popup = () => {
	const {isOpenPopup, setIsOpenPopup, animeTitle} = useContext(PopupContext)

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
			</div>
		</div>
	)
}

export default Popup
