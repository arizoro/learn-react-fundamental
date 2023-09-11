import { Link,NavLink, Outlet } from "react-router-dom";
import "../style/index.css"

function RootLayout() {

    return (
        <>
        <div className="m">
        <NavLink className={({isActive}) =>  isActive ? 'active' : '' }  to="/"  >Home</NavLink> | 
        <NavLink className={({isActive}) =>  isActive ? 'active' : '' } to="/about">About</NavLink> | 
        <NavLink className={({isActive}) =>  isActive ? 'active' : '' } to="/blog">Blog</NavLink>
        <p/>
        </div>
        <Outlet/>
        </>
    )
}

export default RootLayout