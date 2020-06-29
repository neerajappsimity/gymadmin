import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Services from '../utility/core.api'

class Header extends Component {

    constructor(props){
        super(props)
        this.state={
            profile: {},
        }
    }

    Logout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    componentDidMount(){
        this.getprofiledata()
    }

    getprofiledata = async() => {
        try {
            const token = localStorage.getItem("token");
            const response = await new Services().getProfile(token)
            // console.log('response', response)
            if(response.status === 200){
                this.setState({
                    profile : response.data.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    renderTheProfile = (profileObj) => {
        // console.log('test', profileObj)
        return (
            <>
                <ul className="nav navbar-top-links navbar-right pull-right">
                        <li>
                            <Link className="nav-toggler open-close waves-effect waves-light hidden-md hidden-lg"
                                to="/"><i className="fa fa-bars"></i></Link>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src={profileObj.picture} alt="user-img"
                                    width="36" className="img-circle"></img> <b className="hidden-xs">{profileObj.name}</b><span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/" onClick={this.Logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
            </>
        )

    }

    render(){
        return (
            <>
            <nav className="navbar navbar-default navbar-static-top m-b-0">
                <div className="navbar-header">
                    <div className="top-left-part">
                        <Link className="logo" to="/">
                            <b>
                                <img src={window.location.origin+ '/logo.jpg'} alt="home" className="dark-logo" height="50px" width="50px" />
                                <img src={window.location.origin+ '/logo.jpg'} alt="home" className="light-logo" height="50px" width="50px" />
                            </b>
                            <span>
                                Admin Panel
                            </span> 
                        </Link>
                    </div>

                    { this.renderTheProfile(this.state.profile) }
                    
                </div>
            </nav>
            </>
        )
    }
}


export default Header;