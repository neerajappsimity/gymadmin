import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <nav className="navbar navbar-default navbar-static-top m-b-0">
                <div className="navbar-header">
                    <div className="top-left-part">
                        <Link className="logo" to="/">
                            <b>
                                <img src="logo.jpg" alt="home" className="dark-logo" height="50px" width="50px" />
                                <img src="logo.jpg" alt="home" className="light-logo" height="50px" width="50px" />
                            </b>
                            <span>
                                Admin Panel
                            </span> 
                        </Link>
                    </div>
                    <ul className="nav navbar-top-links navbar-right pull-right">
                    <li>
                        <span className="nav-toggler open-close waves-effect waves-light hidden-md hidden-lg"><i className="fa fa-bars"></i></span>
                    </li>
                    <li>
                        {/* <img src="" alt="user-img" width="36" className="img-circle"> hdjk</img><b className="hidden-xs">Steave</b> */}
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default Header;