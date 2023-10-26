import React from 'react'

import styles from './MobileAnimeCard.module.css'

const MobileAnimeCard = ({ animeInfo }) => {
    console.log(animeInfo)
  return (
    <div className={styles.cardWrapper}>
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