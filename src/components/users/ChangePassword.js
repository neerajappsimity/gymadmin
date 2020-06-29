import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Services from '../../utility/core.api'
import Footer from '../Footer'
// import moment from 'moment'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class ChangePassword extends Component {

    constructor(props){
        super(props)
            this.state={
                oldpassword: '',
                newpassword: '',
                confirmpassword: '',
            }
        }
        

        componentWillMount(){
            this.checkIfTokenAvailable()


        }
    
        checkIfTokenAvailable = async() => {
            if(!await localStorage.getItem("token")){
                this.props.history.push('/')
            }
        }


        changeTheValueInput = async(value, type) => {
            if(type === 'oldpassword'){
                this.setState({ oldpassword: value })
            }
            else if(type === 'newpassword'){
                this.setState({newpassword: value})
            }
            else if(type === 'confirmpassword'){
                this.setState({confirmpassword: value})
            }
            else{
                return
            }
        }

        UpdatePassword = async() => {
            const token = localStorage.getItem("token")
            const parames = { oldPassword: this.state.oldpassword, newPassword: this.state.newpassword, confirmPassword: this.state.confirmpassword }
            const response = await new Services(parames).changePassword(token)
            console.log('response', response)
            if(response.status === 200){
                if(response.data.status)
                {
                    this.props.history.push('/profile')
                    toast.success(response.data.msg);
                }
                else{
                    toast.warning(response.data.msg);
                }

            }
        }

        renderTheProfileData = (profileObject) => {
            return (
                <>
                    <ToastContainer />
                    <Form.Group controlId="formBasicOldPassword">
                        <label className="col-md-12">
                            <Form.Label>Old Password</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <Form.Control type="password" defaultValue={this.state.oldpassword} placeholder="Enter old password" onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'oldpassword')
                                }
                            } />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicNewPwd">
                        <label className="col-md-12">
                            <Form.Label>New Password</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <Form.Control type="password" defaultValue={this.state.newpassword} placeholder="Enter new password" onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'newpassword')
                                }
                            } />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicCnfPwd">
                        <label className="col-md-12">
                            <Form.Label>Confirm Password</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <Form.Control type="password" defaultValue={this.state.confirmpassword} placeholder="Enter confirm password" onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'confirmpassword')
                                }
                            } />
                        </div>
                    </Form.Group>

                    <Button className="btn btn-success" variant="primary" onClick={this.UpdatePassword}>
                        Update Password
                    </Button>
                </>
            )
        }

        render(){
            return (
                <>
                    <Header />
                    <Sidebar />
                    <div id="page-wrapper">
                        <div className="container-fluid">
                            <div className="row bg-title">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <h4 className="page-title">Change Password</h4>
                                </div>
                                <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                                    <ol className="breadcrumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Change Password</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="white-box">
                                        <div className="form-horizontal form-material">
                                            { this.renderTheProfileData(this.state.profile) }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
            )
        }

    

}

export default ChangePassword