import {Outlet} from 'react-router-dom'
import Navbar from '../componenets/Navbar'

const SharedRoute = () => {
return(
  <>
  <Navbar/>
  <Outlet/>
  </>
);
}
export default SharedRoute;