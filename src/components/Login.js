import React, { Component } from 'react'
import Services from '../utility/core.api'


class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    componentWillMount = async() => {
        if(await localStorage.getItem('token')){
                this.props.history.push('/users')
        }
    }

    setEmail = (data) => {
        this.setState({
            email: data
        })
    }

    setPassword = (data) => {
        this.setState({
            password: data
        })
    }

    logIn = async() => {
        try {
            const params = {
                email: this.state.email,
                password: this.state.password
            }
            // console.log('params', params)
            const response = await new Services(params).loginAdmin();
            // console.log('response', response)
            if(response.status === 200){
                console.log("repsonse after login is", response.data.msg)
                alert(response.data.msg)
                if(response.data.status){
                    // console.log('token', response.data.token)
                    localStorage.setItem("token", response.data.token)
                    this.props.history.push('/users')
                }

            }

        } catch (e) {

            console.log('err is ', e)

        }
    }


    render() {
        return (
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth">
                <div className="row flex-grow">
                    <div className="col-lg-4 col-lg-offset-4">
                    <div className="auth-form-light text-left p-5">
                        <div className="brand-logo">
                        <img src="logo.jpg" alt="GYM Fitness" />
                        </div>
                        <h4>Hello! let's get started</h4>
                        <h6 className="font-weight-light">Sign in to continue.</h6>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email Address" onChange={
                                (e) => {
                                    this.setEmail(e.target.value)
                                }
                            }
                             />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" onChange={
                                (e) => {
                                    this.setPassword(e.target.value)
                                }
                            }/>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" onClick={
                                () => {
                                    this.logIn()
                                }
                            }>SIGN IN</button>
                        </div>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="form-check">
                            {/* <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input" /> Keep me signed in </label> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Login