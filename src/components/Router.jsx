import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ReleasesPage from './pages/ReleasesPage/ReleasesPage'
import SchedulePage from './pages/SchedulePage/SchedulePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SearchPage from './pages/SearchPage/SearchPage'

import Layout from './Layout'

const Router = () => {
	return <BrowserRouter>
		<Routes>
			<Route path="/anime_online/" element={<Layout/>}>
				<Route index element={<ReleasesPage/>}/>
				<Route path="schedule" element={<SchedulePage/>}/>
				<Route path="profile" element={<ProfilePage/>}/>
				<Route path="releases" element={<ReleasesPage/>}/>
				<Route path="search" element={<SearchPage/>}/>

			</Route>
			<Route element={<NotFoundPage/>} path='*'/>
		</Routes>
	</BrowserRouter>
}

export default Router