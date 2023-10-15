import React from 'react'
import styles from './AcceptButton.module.css'

const AcceptButton = ({ buttonText, onClick }) => {
  return (
    <button className={styles.accept} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default AcceptButton