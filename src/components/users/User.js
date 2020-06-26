import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Services from '../../utility/core.api'
import Footer from '../Footer'
import moment from 'moment'
import { Link } from 'react-router-dom'
// import { BrowserRouter, Route } from 'react-router-dom'


class User extends Component {

    constructor(props){
        super(props)
        this.state={
            userListData: []
        }
    }

    componentWillMount(){
        this.checkIfTokenAvailable()
        this.userlist()
    }

    checkIfTokenAvailable = async() => {
        if(!await localStorage.getItem("token")){
            this.props.history.push('/')
        }
    }

    userlist = async() => {
        try {
            const token = localStorage.getItem("token")
            const response = await new Services().userList(token)
            // console.log('response', response.data.data)
            if(response.status === 200)
            {
                this.setState({
                    userListData: response.data.data
                })
            }
        } catch (error) {
            console.log(error)

        }
    }
    renderTheUserListingData = (userListArray) => {
        return userListArray.map( (current) => {
            return (
                <>
                    <tr key={current.toString()}>
                        <td>
                        <img src={ (current.picture == null) ? 'image/dummy.png' : current.picture } className="mr-2" alt="" height="50px" width="50px"/><b> {current.name}</b></td>
                        <td>{ current.email }</td>
                        <td>{ current.phone }</td>
                        <td>{ current.role }</td>
                        <td>{ current.address }</td>
                        <td>{ current.lat }, { current.lng }</td>
                        <td>{ moment(current.createdAt).format("D MMM, YYYY") }</td>
                    </tr>
                </>
            )
        })
    }

    render(){
        return (
            <div>
            <Header />
            <Sidebar />
            <div id="page-wrapper">
            <div className="container-fluid">
                <div className="row bg-title">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">All Users</h4>
                    </div>
                    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                            <li className="active">Users</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="white-box">
                            <h3 className="box-title">Display All Users</h3>
                            {/* <p className="text-muted">Add class <code>.table</code></p> */}
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Role</th>
                                            <th>Address</th>
                                            <th>Latitude, Longitude</th>
                                            <th>Created Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderTheUserListingData(this.state.userListData)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
            
            </div>

        )
    }

}



export default User