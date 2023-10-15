import React from 'react'
import { useState } from 'react'

import styles from './Popup.module.css'

import DropDown from '../ui/DropDown/DropDown'

const Popup = () => {
	const [isOpen, setIsOpen] = useState(true)
	return isOpen && (
		<div className={styles.popupWrapper}>
			<div className={styles.popupContent}>
				<DropDown/>
			</div>
		</div>
	)
}

export default Popup
