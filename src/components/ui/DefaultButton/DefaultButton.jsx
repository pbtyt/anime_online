import React from 'react'
import styles from './DefaultButton.module.css'


const DefaultButton = ({ buttonText, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
        {buttonText}
    </button>
  )
}

export default DefaultButton