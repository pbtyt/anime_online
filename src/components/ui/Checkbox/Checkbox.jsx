import React from 'react'
import styles from './Checkbox.module.css'
const Checkbox = ({ OnChecked, isChecked }) => {
  return (
    <input type="checkbox" onChange={OnChecked}/>
  )
}

export default Checkbox