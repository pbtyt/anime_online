import React from 'react'
import styles from './ProfilePage.module.css'

import banner from '../../assets/images/jjkbanner.jpg'
import icon from '../../assets/images/jjkava.jpg'

import telegram from '/public/telegramicon.svg'

import AnimeCatalog from '../../components/AnimeCatalog/AnimeCatalog'

const ProfilePage = () => {
  return (
    <>
      <div className={styles.profileBannerImg}>
        <img src={banner} alt="jjk"/>
      </div>
      <div className={styles.profileWrapper}>
        <div className={styles.profileCard}>
            <img src={icon} alt="avatar" className={styles.profileIcon}/>
            <h4 className={styles.profileNickname}>Bladee</h4>
            <div className={styles.profileRole}>
              <h5>Administrator</h5>
            </div>
            <div className={styles.profileLinks}>
              <div className={styles.profileLinkButton}>
                <img src={telegram} alt="telegram" className={styles.profileLinkIcon}/>
              </div>
              <div className={styles.profileLinkButton}>
                <img src={telegram} alt="telegram" className={styles.profileLinkIcon}/>
              </div>
              <div className={styles.profileLinkButton}>
                <img src={telegram} alt="telegram" className={styles.profileLinkIcon}/>
              </div>
            </div>
        </div>

        <div className={styles.profileWatchList}>
          <div className={styles.WatchListCategoryButtons}>
            <div className={`${styles.CategoryButton}`}>
              <h5>Watching</h5>
            </div>

            <div className={`${styles.CategoryButton}`}>
              <h5>Completed</h5>
            </div>

            <div className={`${styles.CategoryButton}`}>
              <h5>Dropped</h5>
            </div>

            <div className={`${styles.CategoryButton} ${styles.activeCategory}`}>
              <h5>Skipping</h5>
            </div>
          </div>

          <div style={{marginTop: '20px'}}>
            <AnimeCatalog/>
          </div>

        </div>
      </div>
    </>
  )
}
export default ProfilePage