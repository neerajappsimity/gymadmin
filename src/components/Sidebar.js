
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {

    
    render(){
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav slimscrollsidebar">
                    <div className="sidebar-head">
                        <h3><span className="fa-fw open-close"><i className="ti-close ti-menu"></i></span> <span className="hide-menu">Navigation</span></h3>
                    </div>
                    <div className="center p-20">
                        <span target="_blank" className="btn btn-danger btn-block waves-effect waves-light"></span>
                    </div>
                    <ul className="nav" id="side-menu">
                        {/* <li>
                            <a href="#" className="waves-effect"><i className="fa fa-clock-o fa-fw" aria-hidden="true"></i></a>
                        </li> */}
                        <li>
                            <Link to="/profile" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i>Profile</Link>
                        </li>
                        {/* <li>
                            <Link to="/changepassword" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i>Change Password</Link>
                        </li> */}
                        <li>
                            <Link to="/users" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i>All Users</Link>
                        </li>
                        <li>
                            <Link to="/tasks" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i>All Tasks</Link>
                        </li>
                        <li>
                            <Link to="/exercise" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i>All Exercise</Link>
                        </li>
                        <li>
                            {/* <a href="fontawesome.html" className="waves-effect"><i className="fa fa-font fa-fw" aria-hidden="true"></i>Icons</a> */}
                        </li>
                        <li>
                            {/* <a href="map-google.html" className="waves-effect"><i className="fa fa-globe fa-fw" aria-hidden="true"></i>Google Map</a> */}
                        </li>
                        <li>
                            {/* <a href="blank.html" className="waves-effect"><i className="fa fa-columns fa-fw" aria-hidden="true"></i>Blank Page</a> */}
                        </li>
                        <li>
                            {/* <a href="404.html" className="waves-effect"><i className="fa fa-info-circle fa-fw" aria-hidden="true"></i>Error 404</a> */}
                        </li>

                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Sidebar;