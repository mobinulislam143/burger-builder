import * as actionTypes from './actionTypes'
import axios from 'axios'

export const auth = (email, password) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }
    const APIKEY = 'AIzaSyBpsUmehz5AYZQ3eu8Etp5gvbOlJbOmTJo'
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+ APIKEY , authData)
    .then(res => console.log(res))
}

