import { useEffect } from 'react'

import Header from './components/Header/Header'
import SchedulePage from './components/pages/SchedulePage/SchedulePage'
import ReleasesPage from './components/pages/ReleasesPage/ReleasesPage'
import ProfilePage from './components/pages/ProfilePage/ProfilePage'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'

import styles from './App.module.css'

function App() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Header/>
      {/* <ProfilePage/> */}
      {/* <SchedulePage/> */}
      {/* <ReleasesPage/> */}
      <NotFoundPage/>
    </div>
  )
}

export default App
