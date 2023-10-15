import React, { useEffect, useState } from 'react'
import styles from './RecentUpdates.module.css'

import AnimeCard from '../ui/AnimeCard/AnimeCard'
import AnimeCardSkeleton from '../ui/AnimeCard/AnimeCardSkeleton'

const RecentUpdates = () => {
    const [anime, setAnime] = useState([])
    const [isLoading, setIsLoading] = useState(true)        

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/v1/title_list?q_filter=title,episode_count,genres,poster&limit=5&offset=35')
                const data = await response.json()

                setAnime(data)
                setIsLoading(false)
                
            } catch (error) {
                console.log('Нет соединения');
            }
        }

        fetchData()
    }, [])

    return (
        <div className={styles.recentUpdatesWrapper}>
            {
                isLoading
                ? [...new Array(5)].map((_, index) => <AnimeCardSkeleton key={index}/>)
                : (anime.map((animeInfo, index) => (
                <AnimeCard
                    key={index}
                    animeInfo={animeInfo}
                />
                )))
            }
        </div>
    )
}

export default RecentUpdates