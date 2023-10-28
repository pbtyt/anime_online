import React from 'react'
import styles from './Button.module.css'


const Button = ({ buttonText, buttonIndex=0, activeButtonIndex=0, OnSelect=()=>{} }) => {
  return (
    <button className={`${styles.button} ${buttonIndex === activeButtonIndex ? styles.activeButton : ""}`} onClick={OnSelect}>
        {buttonText}
    </button>
  )
}

export default Button