import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Input.module.css'
import SearchSvg from '../../../../public/search.svg'

const Input = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("")
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter")
    {
      console.log(searchValue)
      navigate(`/anime_online/search?query=${searchValue}`)
      setSearchValue("")
    }
  }

  return (
    <div className={styles.inputWrapper}>
        <img src={SearchSvg} alt="" />
        <input 
          type="text" 
          placeholder="Search..."

          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}

          className={styles.input}
          />
    </div>
  )
}

export default Input