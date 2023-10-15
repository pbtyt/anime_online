import React from 'react'
import styles from './SchedulePage.module.css'

import Header from '../../Header/Header'
import RecentUpdates from '../../RecentUpdates/RecentUpdates'
import Schedule from '../../Schedule/Schedule'
import AnimeCatalog from '../../AnimeCatalog/AnimeCatalog'

const SchedulePage = () => {
  return (
    <div className={styles.contentWrapper}>
        <div className={styles.animeCatalog}>
            <Schedule/>
            <div className={styles.catalogWrapper}>
                <AnimeCatalog/>
            </div>
        </div>
        <div className={styles.recentUpdates}>
            <h5>Recent Updates</h5>
            <RecentUpdates/>
        </div>
    </div>
    
  )
}

export default SchedulePage