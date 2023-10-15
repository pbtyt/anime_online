import React from 'react'
import styles from './Button.module.css'


const Button = ({ buttonText, isActive }) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.activeButton : ""}`}>
        {buttonText}
    </button>
  )
}

export default Button