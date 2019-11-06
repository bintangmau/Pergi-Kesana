import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Auth.css' 
import {connect} from 'react-redux'
import {userLogin} from '../../redux/actions/userAction'
import {Redirect} from 'react-router-dom'
import Cookie from 'universal-cookie'
import moment from 'moment'
import Axios from 'axios';
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';

let cookieObj = new Cookie()


class Auth extends Component {
    state = {
        page : 'LOGIN',
        namaUser : '',
        passwordUser : '',
        waktu : moment().format('ll')
    }

   
    componentWillReceiveProps(newProps){
        cookieObj.set('userData', newProps.userObj.username, {path : '/'})
    }

    onBtnLogin = () => {
        let userObject = {
            username : this.state.namaUser,
            password : this.state.passwordUser
        }

        const loginHistory = {
            histori : this.state.namaUser + ' Telah melakukan Login',
            idUser : this.state.tampungIDUser,
            idKategori : 4,
            waktu : this.state.waktu
        }
        this.props.userLogin(userObject, loginHistory)
    }


    render() {
        if (this.props.userObj.username !== ''){
            return <Redirect to='/'/>        }
        return (
            <div>
                <div className='register-btn' style={{float : "right", marginTop : "20px", marginRight : "40px"}}>
                   <Link to='/register'><input type="button" value="Don't have an account?&nbsp;Please, Sign Up"className="btn btn-outline-warning" style={{color:"black", border :"none"}}/></Link> 
                </div>
                <div className="container">
                    <div className="row">
                      <div className="login-box">
                          <h1>
                              Sign In
                          </h1>
                          
                          <div className="text-box">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <input type="text" placeholder='Username' onChange={(e) => this.setState({namaUser : e.target.value})}/>
                          </div>
                          <div className="text-box">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            <input type="password" placeholder='Password' onChange={(e) => this.setState({passwordUser : e.target.value})}/>
                          </div>
                          <input type="button" onClick={this.onBtnLogin} value='Log-In' className='tombolMasuk'/>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj : state.user
    }
}
export default connect(mapStateToProps, {userLogin})(Auth);