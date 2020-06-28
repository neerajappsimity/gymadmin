import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import Services from '../../utility/core.api'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FileBase64 from 'react-file-base64';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateExercise extends Component {

    constructor(props){
        super(props)
        this.state = {
            exercise_id: this.props.match.params.exerciseId,
            ExerciseView: {},
            title: '',
            description: '',
            logo: ''
        }
    }

    componentDidMount(){
        this.checkIfTokenAvailable()
        this.ExerciseView()
        // console.log(this.props.match.params.exerciseId)
    }

    checkIfTokenAvailable = async() => {
        if(!await localStorage.getItem("token"))
        {
            this.props.history.push('/')
        }
    }
    

    getFiles(files){
        const base64 = files.base64.split('base64,')[1]
        this.setState({ logo: base64 })
    }
    
    changeTheValueInputt = async(value, type) => {
        if( type === 'title'){
            this.setState({title: value})
        }
        else if(type === 'description'){
            this.setState({description: value})
        }
        else if(type === 'logo'){
            this.setState({logo: value})
        }
    } 

    ExerciseView = async() => {
        try {
            const token = localStorage.getItem("token")
            const params = { exercise_id: this.state.exercise_id}
            // console.log(params)
            const response = await new Services(params).exerciseView(token)
            // console.log('response', response)
            if(response.status === 200){
                this.setState({
                    // ExerciseView: response.data.data
                    title: response.data.data.title,
                    description: response.data.data.description,
                    logo: response.data.data.logo
                })
            }
        } catch (e) {
            console.log(e)
            
        }
    }

    UpdateExercise = async() => {
        try{
            const token = localStorage.getItem("token")
            const params = { title_id: this.state.exercise_id, newTitle: this.state.title, newDescription: this.state.description, newLogo: this.state.logo }
            const response = await new Services(params).updateExercise(token)
            toast.warning(response.data.msg);
            if(response.status === 200){
                if(response.data.msg === 'successfully updated'){
                    console.log(response.data.data)
                    this.ExerciseView()
                    this.props.history.push('/exercise')
                }
            }
        }
        catch(e){
            console.log(e)

        }
    }

    renderTheExerciseForm = (ExerciseObj) => {
        // console.log('check', ExerciseObj)
        return (
            <>
                <div className="form-horizontal form-material">
                    <Form.Group controlId="formBasicName">
                        <label className="col-md-12">
                            <Form.Label>Title</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <Form.Control type="text" defaultValue={this.state.title}  placeholder="Enter title" onChange={
                                (e) => {
                                    this.changeTheValueInputt(e.target.value, 'title')
                                }
                            } />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicDescription">
                        <label className="col-md-12">
                            <Form.Label>Description</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <textarea rows="5" defaultValue={this.state.description} className="form-control form-control-line" onChange={
                                (e) => {
                                    this.changeTheValueInputt(e.target.value, 'description')
                                }
                            }></textarea>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicExerciseImage">
                        <label className="col-md-12">
                            <Form.Label>Exercise Picture</Form.Label>
                        </label>
                        <div className="col-md-12">
                            <FileBase64 
                            multiple = { false }
                            onDone = { this.getFiles.bind(this) } 
                            />
                        </div>
                    </Form.Group>
                    <Button className="btn btn-success" variant="primary" onClick={this.UpdateExercise}>
                            Update
                    </Button>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
            <Header />
            <Sidebar />

            <ToastContainer />
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row bg-title">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Update <b>({this.state.title})</b>  </h4>
                        </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Update Exercise</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="white-box">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h3 className="box-title">Add Excercis</h3>
                                    </div>
                                </div>
                                {/* <p className="text-muted">Add class <code>.table</code></p> */}
                                <div className="table-responsive">
                                    <div className="white-box">
                                        {this.renderTheExerciseForm(this.state.ExerciseView)}
                                    </div>                                    
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

export default UpdateExercise