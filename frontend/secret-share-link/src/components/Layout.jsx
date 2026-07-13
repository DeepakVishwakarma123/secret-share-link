import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Updates from "./Updates";

function Layout()
{
return <>

<NavBar/>
<Outlet/>
<Footer/>
<Updates/>
</>
}

export default Layout