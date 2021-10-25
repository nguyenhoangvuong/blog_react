import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings"><img className="topImg" alt="img top" src="https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g" alt="" /></Link>
                ) : <>
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/login" className="link">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/register" className="link">REGISTER</Link>
                    </li>
                </ul>
                </>
            }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
