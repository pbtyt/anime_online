import React from 'react'
import styles from './Schedule.module.css'

import Button from '../ui/Button/Button'

const Schedule = () => {
  return (
    <div className={styles.buttonsWrapper}>
      <Button buttonText={"Monday"} isActive={true}/>
      <Button buttonText={"Tuesday"}/>
      <Button buttonText={"Wednesday"}/>
      <Button buttonText={"Thursday"}/>
      <Button buttonText={"Friday"}/>
      <Button buttonText={"Saturday"}/>
      <Button buttonText={"Sunday"}/>
    </div>
  )
}

export default Schedule