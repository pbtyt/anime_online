import React from 'react'
import styles from './CancelButton.module.css'

const CancelButton = ({ buttonText }) => {
  return (
    <button className={styles.button}>
      {buttonText}
    </button>
  )
}

export default CancelButton