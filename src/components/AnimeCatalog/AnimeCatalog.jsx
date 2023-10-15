import React from 'react'
import styles from './AnimeCatalog.module.css'
import { useState, useEffect } from 'react'

import AnimeCard from '../ui/AnimeCard/AnimeCard'
import { useSelector } from 'react-redux'
import AnimeCardSkeleton from '../ui/AnimeCard/AnimeCardSkeleton'

const AnimeCatalog = () => {
    const [anime, setAnime] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const selectedGenres = useSelector(state => state.filter.genres)
    
    /*
    useEffect(()=>{
        setAnime(["Kaguya-sama: Love is War?", "Kaguya-sama: Love is War? 2nd Season"])
    }, [])
    */
    
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () => {
            try {
                console.log(`http://localhost:8000/v1/title_list?genres=${selectedGenres.join(",")}&q_filter=title,episode_count,genres,poster&limit=140`)
                const response = await fetch(`http://localhost:8000/v1/title_list?genres=${selectedGenres.join(",")}&q_filter=title,episode_count,genres,poster&limit=35&offset=55`)
                // const response = await fetch(`http://localhost:8000/all_anime/by_genres?genres=${selectedGenres.join(",")}&q_filter=title,episode_count,genres,poster&limit=140`)
                const data = await response.json()

                setAnime(data)
                setIsLoading(false)
                console.log("Карточки пришли с сервера")
            } catch (error) {
                console.log('Нет соединения');
            }
        }

        fetchData()
    }, [selectedGenres])
    
  return (
    <div className={styles.animeCatalogWrapper}>
        {
            isLoading
                ? [...new Array(14)].map((_, index) => <AnimeCardSkeleton key={index}/>)
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

export default AnimeCatalog