import React, { useState, useMemo } from 'react'
import styles from './Schedule.module.css'

import Button from '../ui/Button/Button'

const Schedule = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  return (
    <div className={styles.buttonsWrapper}>
      <Button buttonText={"Monday"} buttonIndex={0} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(0)}/>
      <Button buttonText={"Tuesday"} buttonIndex={1} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(1)}/>
      <Button buttonText={"Wednesday"} buttonIndex={2} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(2)}/>
      <Button buttonText={"Thursday"} buttonIndex={3} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(3)}/>
      <Button buttonText={"Friday"} buttonIndex={4} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(4)}/>
      <Button buttonText={"Saturday"} buttonIndex={5} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(5)}/>
      <Button buttonText={"Sunday"} buttonIndex={6} activeButtonIndex={activeButtonIndex} OnSelect={()=>setActiveButtonIndex(6)}/>
    </div>
  )
}

export default Schedule