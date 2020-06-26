import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import Services from '../../utility/core.api'
import moment from 'moment'
import {button} from 'react-bootstrap'

class Task extends Component {

    constructor(props){
        super(props)
        this.state={
            taskListData: []
        }       
    }

    componentDidMount(){
        this.checkIfTokenAvailable()
        this.tasklist()
    }

    checkIfTokenAvailable = async() => {
        if(!await localStorage.getItem("token"))
        {
            this.props.history.push('/')
        }
    }

    tasklist = async() => {
        try {
            const token = localStorage.getItem("token")
            const response = await new Services().taskList(token)
            // console.log('response', response.data.data)
            if(response.status === 200)
            {
                this.setState({
                    taskListData: response.data.data
                })
            }
        } catch (e) {
            console.log('error is', e)
        }
    }

    /*** Delete Task***/
    DeleteTaskRow = async(value) => {
        const token = localStorage.getItem("token")
        const params = {task_id: value}
        const response = await new Services(params).deleteTask(token)
        if(response.status === 200)
        {
            this.tasklist()
            alert(response.data.msg)
        }
        
    }

    renderTheTaskListing = (taskListArray) => {
        return taskListArray.map( (current) => {

            console.log(current.user.picture)
            return (
                <>
                    <tr>
                        <td> <img src={ (current.user.picture) ? current.user.picture : 'image/dummy.png' } className="mr-2" alt="" height="50px" width="50px"/> {current.user.name }</td>
                        <td><img src={ (current.sender.picture) ? current.sender.picture : 'image/dummy.png' } className="mr-2" alt="" height="50px" width="50px"/> {current.sender.name }</td>
                        <td><b>{ current.title.toUpperCase() }</b></td>
                        <td>{ moment(current.start_date).format("D MMM, YYYY") }</td>
                        <td>{ current.start_time } | { current.end_time }</td>
                        <td>{ current.type.toUpperCase() }</td>
                        <td>{ moment(current.createdAt).format("D MMM, YYYY") }</td>
                        <td>{ current.status.toUpperCase() }</td>
                        <td><button value={current._id} className="btn btn-danger btn-xs" onClick={
                            (e) => {
                                this.DeleteTaskRow(e.target.value)
                            }
                        }>Delete</button></td>
                    </tr>
                </>
            )
        })
    }
    

    render(){
        return(
            <>
            <div>
                <Header />
                <Sidebar />
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row bg-title">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">All Task</h4>
                            </div>
                            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                                <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                    <li className="active">Tasks</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="white-box">
                                    <h3 className="box-title">Display All Tasks</h3>
                                    {/* <p className="text-muted">Add class <code>.table</code></p> */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th><b>to</b> Sender</th>
                                                    <th>Title</th>
                                                    <th>Task Date</th>
                                                    <th width="15%">Start Time | End Time</th>
                                                    <th>Type</th>
                                                    <th>Created Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { this.renderTheTaskListing(this.state.taskListData) }
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
            </>
        )
    }
}

export default Task