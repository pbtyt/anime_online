import React, { useContext } from 'react'
import { PopupContext } from '../../../providers/PopupProvider'

import { BsFolderPlus } from 'react-icons/bs'
import styles from './MobileAnimeCard.module.css'

const MobileAnimeCard = ({ animeInfo }) => {
    const {setIsOpenPopup, setAnimeTitle} = useContext(PopupContext)
    
  return (
    <div className={styles.cardWrapper}>
        <BsFolderPlus
            style={{color: "yellow", position:"absolute", width: "24px", height: "24px"}}
            onClick={()=>{setIsOpenPopup(true); setAnimeTitle(animeInfo.title)}}
        />
        <img src={animeInfo.poster} alt="Anime Poster" className={styles.cardPoster} />
        <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>
                {animeInfo.title}
            </h2>
            <h6 className={styles.cardEpisodeCount}>
                {animeInfo.episode_count} episodes
            </h6>
            <p className={styles.cardDescription}>
                {animeInfo.description}
            </p>
        </div>
    </div>
  )
}

export default MobileAnimeCard