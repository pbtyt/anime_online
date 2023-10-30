import {createContext ,useState } from 'react'

export const PopupContext = createContext()

const PopupProvider = ({ children }) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [animeTitle, setAnimeTitle] = useState('')
    const [localStorageData, setLocalStorageData] = useState({})
  return (
    <PopupContext.Provider value={ {isOpenPopup, setIsOpenPopup, animeTitle, setAnimeTitle, localStorageData, setLocalStorageData} }>
        {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider