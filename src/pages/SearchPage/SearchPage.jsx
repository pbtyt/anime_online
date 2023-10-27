import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './SearchPage.module.css'

import AnimeCard from '../../components/ui/AnimeCard/AnimeCard'
import AnimeCardSkeleton from '../../components/ui/AnimeCard/AnimeCardSkeleton'


const SearchPage = () => {
    const [anime, setAnime] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get("query") || "" 
    
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () => {
            try{
                const response = await fetch(`https://apiv2-sepia.vercel.app/v1/title/search?title=${searchQuery}&q_filter=title,poster,episode_count,genres&limit=0`)
                const data = await response.json()

                setAnime(data)
                setIsLoading(false)
            } catch(error){
                console.log("Нет подключения")
            }
        }

        fetchData()
    }, [searchQuery])

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

export default SearchPage