import React from 'react'
import styles from './Filters.module.css'

import CheckboxFilter from '../ui/CheckboxFilter/CheckboxFilter'
import AcceptButton from '../ui/AcceptButton/AcceptButton'
import CancelButton from '../ui/CancelButton/CancelButton'

import { useSelector, useDispatch } from 'react-redux'
import { showSelectedGenres } from '../../store/filter.slice'

const Filters = () => {

  const selectedGenres = useSelector((state)=>state.filter.genresTemp)
  const dispatch = useDispatch()

  return (
    <div className={styles.filterWrapper}>

      <div className={styles.CategoryWrapper}>
        <h4>Жанры</h4>
        <div className={styles.genresFilterWrapper}>
          <div>
            <CheckboxFilter filterText={"комедия"}/>
            <CheckboxFilter filterText={"школа"}/>
            <CheckboxFilter filterText={"повседневность"}/>
          </div>

          <div>
            <CheckboxFilter filterText={"боевик"}/>
            <CheckboxFilter filterText={"приключения"}/>
            <CheckboxFilter filterText={"фантастика"}/>
          </div>
        </div>

        <button className={styles.showAllButton}> Сделать кнопку </button>
      </div>

      <div className={styles.CategoryWrapper}>
        <h4>Год</h4>
        <div className={styles.yearInputsWrapper}>
          <input type="text" placeholder='От' className={styles.yearInput}/>
          <input type="text" placeholder='До' className={styles.yearInput}/>
        </div>
      </div>

      <div className={styles.CategoryWrapper}>
        <h4>Статус</h4>
        <div className={styles.statusFilterWrapper}>
          <CheckboxFilter filterText={"Онгоинг"}/>
          <CheckboxFilter filterText={"Завершено"}/>
        </div>
      </div>

      <div className={styles.buttons}>
        <CancelButton buttonText={"Очистить"}/>
        <AcceptButton buttonText={"Показать"} onClick={ ()=>{console.log(selectedGenres);dispatch( showSelectedGenres() )} }/>
      </div>
    </div>
  )
}

export default Filters