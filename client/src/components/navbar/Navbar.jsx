import "./navbar.scss"
import logo from "../../images/logo.jpg"
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"


const Navbar = () => {
const [isScrolled,setIsCrolled]=useState(false);

window.onscroll=()=>{
    setIsCrolled(window.pageYOffset===0 ? false :true);
    return ()=>(window.onscroll=null);
}

  return (
    <div className={isScrolled? "navbar scrolled": "navbar"}>
    <div className="container">
    <div className="left">
    <img src={logo} alt="Trends"/>
    <span>HomePage</span>
    <span>Album</span>
    <span>Songs</span>
    <span>New and Popular</span>
    <span>My Lists</span>
    </div>
    <div className="right">
    <Search className="icon"/>
   
    <Notifications className="icon"/>
    <span>Miompolly</span>
    <img src="https://miompolly.000webhostapp.com/image/mio.png"/>
    <div className="profile">
    <ArrowDropDown className="icon"/>
   <div className="options">
    <span>Settings</span>
    <span>Logout</span>
    </div>
    </div>
    </div>
    </div>
      
    </div>
  )
}

export default Navbar
