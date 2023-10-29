import React, { useState } from 'react'
import styles from './ReleasesPage.module.css'

import AnimeCatalog from '../../components/AnimeCatalog/AnimeCatalog'
import Filters from '../../components/Filters/Filters'
import Popup from '../../components/Popup/Popup'

const ReleasesPage = () => {
  return (
    <>
      <div className={styles.contentWrapper}>
            <div className={styles.catalogWrapper}>
              <AnimeCatalog/>
            </div>
          <div className={styles.filters}>
            <Filters/>
          </div>
      </div>

      <Popup/>
    </>
  )
}

export default ReleasesPage