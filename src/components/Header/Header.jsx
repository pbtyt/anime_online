import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import isMobileView from '../../utils/isMobileView'

import styles from './Header.module.css'

import Input from '../ui/Input/Input'

import NotifySvg from '../../../public/asd.svg'
import avatar from '../../assets/images/jjkava.jpg'
import weblogo from '../../assets/images/logo.jpg'

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isVisibleMenu, setIsVisibleMenu] = useState(false)
    console.log(isMobileView()); //detect mobile view for new mobile design 
  return (
    <div className={styles.headerWrapper}>
        <img src={weblogo} alt="weblogo"/>

        <div className={styles.linksWrapper}>
            <button className={styles.menuToggle} onClick={()=>setIsVisibleMenu(!isVisibleMenu)}>Menu</button>
            <ul className={`${styles.links} ${isVisibleMenu ? "" : styles.hiddenMenu}`}>
                <Link to="/anime_online/releases" className={`${styles.link} ${activeIndex === 0 ? styles.activeLink: ""}`} onClick={()=>setActiveIndex(0)}>
                    Releases
                </Link>
                <Link to="/anime_online/schedule" className={`${styles.link} ${activeIndex === 1 ? styles.activeLink: ""}`} onClick={()=>setActiveIndex(1)}>
                    Schedule
                </Link>
                <Link to="/anime_online/team" className={`${styles.link} ${activeIndex === 2 ? styles.activeLink: ""}`} onClick={()=>setActiveIndex(2)}>
                    Team
                </Link>
            </ul>
        </div>

        <div className={styles.leftHeader}>
            <Input/>
            <img src={NotifySvg} alt=""/>
            <Link to="/anime_online/profile">
                <div className={styles.userIcon}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </Link>
        </div>        
    </div>
  )
}

export default Header