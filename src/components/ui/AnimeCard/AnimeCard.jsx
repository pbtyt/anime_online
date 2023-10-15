import React from 'react'
import styles from './AnimeCard.module.css'
//FOR TEST ONLY
import kaguyaBG from '../../../assets/images/kaguya.webp'

const AnimeCard = ({ animeInfo }) => {
  return (
    <div className={styles.cardWrapper}>
        <img src={animeInfo.poster} style={{userSelect: "none"}}/>
        
        <div className={styles.animeInfoWrapper}>
            <img className={styles.WatchListButton} src="/addToWatchlistIcon.svg" alt="icon"/>
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
        </div>
    </div>
  )
}

export default AnimeCard 