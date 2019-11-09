import Axios from 'axios'
import {urlApi} from '../../helper/database'
import swal from 'sweetalert'

export const userLogin = (userObj, loginhistory) => { // FUNCTION LOGIN
    return(dispatch) => {

    Axios.post(urlApi + 'user/login', { email : userObj.email, password : userObj.password })
    .then((res) => {  //then untuk pengkondisian if,,
        if(res.data.length > 0){   //jika dalam database ada maka ia melakukan then
            dispatch({
                type : 'LOGIN', // sama dgn di user global
                payload : {
                    username : res.data[0].username, // yg kanan hrus sama dengan db.json
                    role : res.data[0].role,
                    email : res.data[0].email,
                    id : res.data[0].id
                }
            })
            if(res.data[0].role === 'admin'){
                swal('Welcome!', 'Selamat datang ' + res.data[0].username, 'success')
            } else {
                Axios.post(urlApi + 'user/loginhistory', { histori : res.data[0].username + ' Telah melakukan Login', idUser : res.data[0].id, 
                    idKategori : loginhistory.idKategori, waktuHistori : loginhistory.waktu})
                .then((res) => {
                    swal('Welcome!', 'Selamat datang ' + res.data[0].username, 'success')
                })
                .catch((err) => {
                    swal ('Ye!', 'Login Success !', 'success')
                })
            }
        }
        else {
            console.log(res.data)
            swal ('Error', 'Username/Password is wrong!', 'error')
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
}


export const resetUser = () => { //FUNCTION LOGOUT
    return(dispatch) => {
        dispatch({
            type : 'RESET_USER'
        })
    }
}


export const registerUser = (registerObj, registerhistory) => { //parameter dr function ini adalah inputan = registerObj
    return () => {
                if(registerObj.username === '') {
                    swal('Ups!', 'Input username!', 'warning')
                } else if(registerObj.email === '') {
                    swal('Ups!', 'Input email!', 'warning')
                } else if (registerObj.password === '') {
                    swal('Ups!', 'Input password!', 'warning')
                } else {
                        Axios.post(urlApi + 'user/register', registerObj) //registerObj berisi inputan
                        .then((res) => {
                            // dispatch ({
                            //     type : 'LOGIN',
                            //     payload : {
                            //         username : res.data.username, //dari inputan register
                            //         password : res.data.password, 
                            //         role : res.data.role  
                            //     }
                            // })
                            Axios.post(urlApi + 'user/registerhistory', {histori : registerhistory.histori, idUser : registerhistory.idUser, 
                                                                    idKategori : registerhistory.idKategori, waktuHistori : registerhistory.waktuHistori})
                            .then((res) => {
                                swal ('Yeah', 'Register success!', 'success')
                            })
                            .catch((err) => {
                                swal ('Error', 'Something is wrong ( History )!', 'error')    
                            })
                        })
                        .catch((err) => {
                            swal ('Ups!', 'Email used!', 'warning')
                        })
                    }
                }
            }


export const keepLogin = (cookieData) => {
    return(dispatch) => {
        Axios.get(urlApi + 'users',{
            params : {
                username : cookieData
            }
            })
            .then((res) => {
                dispatch({
                    type : 'KEEP_LOGIN',
                    payload : {
                        username : res.data[0].username,
                        role : res.data[0].role,
                        id : res.data[0].id
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}