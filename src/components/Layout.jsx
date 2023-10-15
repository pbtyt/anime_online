import { Outlet } from 'react-router-dom'

import Header from './Header/Header' 
import Popup from './Popup/Popup'

const Layout = () => {
	return (
		<>
			<Header/>
			<Outlet/>
			{/*<Popup/>*/}
		</>	
	)
}

export default Layout