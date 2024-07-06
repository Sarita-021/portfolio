import react, { useState, useEffect } from "react";
import "../CSS/header.css";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DataObjectIcon from '@mui/icons-material/DataObject';


const Header = () => {

    const [header, setHeader] = useState("navbar_menu hide")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 90) {
            return setHeader("navbar_menu hide")
        } else if (window.scrollY >= 90) {
            return setHeader("navbar_menu show")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const [Mobile, setMobile] = useState(false)


    return (
        <header>
            <div id="navbar">
                <div className="navbar_logo-text">
                    <div className='myphoto' >
                        <img className="myph" src={"img/myphoto.jpeg"} />
                    </div>
                    <div className="navbar_text"><h1>Sarita</h1></div>
                </div>
                <div className={Mobile ? "unwrap" : "wrap"} onClick={() => setMobile(false)} >
                    <div className={header}>
                        <ul className="ul">
                            <li><NavLink exact activeClassName="active" className="nav_link" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav_link" to="/Myprojects">Projects</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav_link" to="/MyBlogs">Blogs</NavLink></li>
                            <div className="hmbtn">
                                <li><a href="#footer" className="nav_link">Hire Me</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="navbar_button-wrapper">
                        <ul className="ul">
                            <li><a className="hireme" href="#footer">Hire Me</a></li>
                        </ul>
                    </div>
                </div>
                <div id="menu-btn" onClick={() => setMobile(!Mobile)} class="menu-btn hide">{Mobile ? <CloseIcon style={{ color: "white" }} /> : <MenuIcon style={{ color: "white" }} />}</div>
            </div>
        </header>
    );
}

export default Header;

