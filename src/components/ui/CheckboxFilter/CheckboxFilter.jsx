import React from 'react'
import styles from './CheckboxFilter.module.css'

import Checkbox from '../Checkbox/Checkbox'

import { useDispatch } from 'react-redux'
import { selectGenre } from '../../../store/filter.slice'

const CheckboxFilter = ({ filterText }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.genreFilterWrapper}>
        <Checkbox
          OnChecked={()=>dispatch(selectGenre(filterText))}
        />
        <h5 className={styles.genreText}>
            {filterText}
        </h5>
    </div>
  )
}

export default CheckboxFilter