import Axios from 'axios'
import URLS from './url.constant'


class Services {
    constructor(params){
        this.url = URLS.baseUrl
        this.params = params

    }

    loginAdmin = async() => {
        try {
            let data = await Axios.post(this.url+URLS.loginAdmin,this.params,{/** token */})
            // console.log('data', data)
            return data
            
        } catch (e) {
            console.log('error is ', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.response
        }
    }

    /***** USER LIST****/

    userList = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.userList, this.params, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            // console.log('usercore', data)
            return data
        }
        catch(e) {
            console.log('error is', e)
            if(e.reponse.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

    /***** USER LIST****/

    /**** TaskList ***/

    taskList = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.taskList, this.params, {
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data
        } 
        catch(e) {
            console.log('error is', e)
            if(e.reponse.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

    /**** TaskList ***/

    deleteTask = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.deleteTask, this.params, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data
        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

    getProfile = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.getProfile, this.params, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data
        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
            
        }
    }
    editProfile = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.editProfile, this.params, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data
        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
            
        }
    }

    exerciseList = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.exerciseList, this.params, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data
            
        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
            
        }
    }

    addExercise = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.addExercise, this.params,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data

        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

    updateExercise = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.updateExercise, this.params,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data

        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

    exerciseView = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.exerciseView, this.params,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data

        } catch (e) {
            console.log('error is', e)
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

    changePassword = async(token) => {
        try {
            let data = await Axios.post(this.url+URLS.changePassword, this.params,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": token
                }
            })
            return data

        } catch (e) {
            if(e.response.status !== 404){
                throw e.response
            }
            throw e.reponse
        }
    }

}



export default Services