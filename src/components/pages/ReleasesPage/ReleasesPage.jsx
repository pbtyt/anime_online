import React from 'react'
import styles from './ReleasesPage.module.css'

import AnimeCatalog from '../../AnimeCatalog/AnimeCatalog'
import Filters from '../../Filters/Filters'

const ReleasesPage = () => {
  return (
    <div className={styles.contentWrapper}>
          <div className={styles.catalogWrapper}>
            <AnimeCatalog/>
          </div>
        <div className={styles.filters}>
          <Filters/>
        </div>
    </div>
  )
}

export default ReleasesPage