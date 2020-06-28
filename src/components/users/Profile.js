import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Services from '../../utility/core.api'
import Footer from '../Footer'
// import moment from 'moment'
import { Form, Button } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Profile extends Component {

    constructor(props){
        super(props)
            this.state={
                profile: {},
                name: '',
                email: '',
                phone: '',
                picture: '',
                address: ''
            }
        }

        componentWillMount(){
            this.checkIfTokenAvailable()
            this.getprofiledata()
        }
    
        checkIfTokenAvailable = async() => {
            if(!await localStorage.getItem("token")){
                this.props.history.push('/')
            }
        }

        getFiles(files){
            const base64 = files.base64.split('base64,')[1]
            this.setState({ picture: base64 })
        }

        getprofiledata = async() => {
            try {
                const token = localStorage.getItem("token");
                const response = await new Services().getProfile(token)
                console.log('response', response)
                if(response.status === 200){
                    this.setState({
                        // profile : response.data.data
                        name: response.data.data.name,
                        email: response.data.data.email,
                        phone: response.data.data.phone,
                        picture: response.data.data.picture,
                        address: response.data.data.address
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }

        renderTheProfileImage = (profileObject) => {
            return (
                <>
                    <div className="white-box">
                        <div className="user-bg"> <img width="100%" alt="user" src="logo.jpg"></img>
                            <div className="overlay-box">
                                <div className="user-content">
                                    <Link to="/profile"><img src={ (this.state.picture) ? this.state.picture : 'image/dummy.png' }
                                            className="thumb-lg img-circle" alt="img"></img></Link>
                                    <h4 className="text-white">{this.state.name}</h4>
                                    <h5 className="text-white">{this.state.email}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="user-btm-box">
                            <div className="col-md-4 col-sm-4 text-center">
                                <p className="text-purple"><i className="ti-facebook"></i></p>
                                <h1>258</h1>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center">
                                <p className="text-blue"><i className="ti-twitter"></i></p>
                                <h1>125</h1>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center">
                                <p className="text-danger"><i className="ti-dribbble"></i></p>
                                <h1>556</h1>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        changeTheValueInput = async(value, type) => {
            if(type === 'name'){
                this.setState({ name: value })
            }
            else if(type === 'email'){
                this.setState({email: value})
            }
            else if(type === 'phone'){
                this.setState({phone: value})
            }
            else if(type === 'picture'){
                this.setState({picture: value})
            }
            else if(type === 'address'){
                this.setState({address: value})
            }
            else{
                return
            }
        }

        UpdateProfile = async() => {
            try{
                const token = localStorage.getItem("token")
                const params = { newName: this.state.name, newAddress: this.state.address, newPhone: this.state.phone, newPicture: this.state.picture }
                const response = await new Services(params).editProfile(token)
                toast.warning(response.data.msg);
                // console.log('res', params)
                if(response.status === 200){
                    if(response.data.msg === 'profile successfully updated'){
                        this.getprofiledata()
                        // this.renderTheProfileImage(this.state.profile)
                        // window.location.reload();
                        // this.props.history.push('/profile')
                    }
                }
            }
            catch(e){
                console.log(e)
    
            }
        }

        renderTheProfileData = (profileObject) => {
            return (
                <>
                    <Form.Group controlId="formBasicName">
                        <label className="col-md-12">
                            <Form.Label>User Name</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <Form.Control type="text" defaultValue={this.state.name} placeholder="Enter username" onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'name')
                                }
                            } />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <label className="col-md-12">
                            <Form.Label>Email address</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <Form.Control type="email" defaultValue={this.state.email} placeholder="Enter email" onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'email')
                                }
                            } />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <label className="col-md-12">
                            <Form.Label>Phone Number</Form.Label>
                        </label>
                        <div className="col-md-12">
                            
                            <Form.Control type="text" defaultValue={this.state.phone} placeholder="Enter Phone Number" onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'phone')
                                }
                            } />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPicture">
                        <label className="col-md-12">
                            <Form.Label>Profile Picture</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <FileBase64 
                            multiple = { false }
                            onDone = { this.getFiles.bind(this) } 
                            />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <label className="col-md-12">
                            <Form.Label>Address</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <textarea rows="5" className="form-control form-control-line" defaultValue={this.state.address} onChange={
                                (e) => {
                                    this.changeTheValueInput(e.target.value, 'address')
                                }
                            }></textarea>
                        </div>
                    </Form.Group>

                    <Button className="btn btn-success" variant="primary" onClick={this.UpdateProfile}>
                        Update Profile
                    </Button>
                </>
            )
        }

        render(){
            return (
                <>
                    <Header />
                    <Sidebar />
                    <ToastContainer />
                    <div id="page-wrapper">
                        <div className="container-fluid">
                            <div className="row bg-title">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                    <h4 className="page-title">Profile page</h4>
                                </div>
                                <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                                    <ol className="breadcrumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Profile Page</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12">
                                    { this.renderTheProfileImage(this.state.profile) }
                                </div>
                                <div className="col-md-8 col-xs-12">
                                    <div className="white-box">
                                        <div className="form-horizontal form-material">
                                            { this.renderTheProfileData(this.state.profile) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
            )
        }

    

}

export default Profile