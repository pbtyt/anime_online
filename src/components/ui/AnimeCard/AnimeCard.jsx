import React, {useContext} from 'react'
import styles from './AnimeCard.module.css'

import { PopupContext } from '../../../providers/PopupProvider'

import { BsFolderPlus } from 'react-icons/bs'

//FOR TEST ONLY
import kaguyaBG from '../../../assets/images/kaguya.webp'

const AnimeCard = ({ animeInfo }) => {
  const {setIsOpenPopup, setAnimeTitle} = useContext(PopupContext)

  return (
    <div className={styles.cardWrapper}>
        <img src={animeInfo.poster} style={{userSelect: "none"}}/>
        
        <div className={styles.animeInfoWrapper}>
            <h3 className={styles.animeEpisodesCount}>
              {animeInfo.episode_count} episodes
            </h3>
            <h2 className={styles.animeTitle}>
                {animeInfo.title}
            </h2>

            <h6 className={styles.animeGenres}>
              {animeInfo.genres.join(" · ")}
            </h6>

            <button className={styles.watchAnimeButton}>Watch</button>
            <BsFolderPlus
              className={styles.WatchListButton}
              onClick={()=>{setIsOpenPopup(true); setAnimeTitle(animeInfo.title)}}
            />
        </div>
    </div>
  )
}

export default AnimeCard 