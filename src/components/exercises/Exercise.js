import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import Services from '../../utility/core.api'
import moment from 'moment'
import {button} from 'react-bootstrap'

class Exercise extends Component {

    constructor(props){
        super(props)
        this.state = {
            exerciseListData: []
        }
    }

    componentDidMount(){
        this.checkIfTokenAvailable()
        this.exerciselist()
    }

    checkIfTokenAvailable = async() => {
        if(!await localStorage.getItem("token"))
        {
            this.props.history.push('/')
        }
    }

    exerciselist = async() => {
        try {
            const token = localStorage.getItem("token")
            const response = await new Services().exerciseList(token)
            if(response.status === 200)
            {
                this.setState({
                    exerciseListData: response.data.data
                })
            }
            
        } catch (e) {
            console.log(e)
        }
    }

    

    renderTheExerciseListing = (exerciseListArray) => {
        return exerciseListArray.map( (exerciseObject)  => {
            return(
                <>
                    <tr>
                        <td>{ exerciseObject.title }</td>
                        <td>{ exerciseObject.description }</td>
                        <td>{ moment(exerciseObject.createdAt).format("D MMM, YYYY") }</td>
                        <td>{ exerciseObject.status }</td>
                        <td><button value={exerciseObject._id} className="btn btn-success btn-xs">Update</button></td>
                    </tr>
                </>
            )
        })
        
    }

    render() {
        return (
            <>
            <Header />
            <Sidebar />

            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row bg-title">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">All Exercise</h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Exercise</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="white-box">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h3 className="box-title">Display All Excercis</h3>
                                    </div>
                                    <div className="col-sm-4">
                                    <button className="btn btn-info btn-xs pull-right">Add Exercise</button>
                                    </div>
                                </div>
                                {/* <p className="text-muted">Add class <code>.table</code></p> */}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Created Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.renderTheExerciseListing(this.state.exerciseListData) }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            </>
        )
    }

}

export default Exercise