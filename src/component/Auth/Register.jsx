import React, { Component } from 'react';
import './Auth.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../../redux/actions/userAction'
import swal from 'sweetalert'

class Register extends Component {
    state = {
      registerName : '',
      RegisterEmail : '',
      registerPassword : '',
      role : 'user',
      waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate()
    }

    registerBtn = () => {
        let registerScs = {
          username : this.state.registerName,
          email : this.state.registerEmail,
          password : this.state.registerPassword,
          role : this.state.role,
          status : 'Unverified',
        }
  
        const registerHistory = {
          histori : this.state.registerName + ' Telah Melakukan Registrasi',
          idUser : 0,
          idKategori : 3,
          waktuHistori : this.state.waktu
        }
        // alert(this.state.registerName)
        this.props.registerUser(registerScs, registerHistory)
    }

    render() {
        return (
            <div>
                 <div className='register-btn' style={{float : "right", marginTop : "20px", marginRight : "40px"}}>
                   <Link to='./auth'><input type="button" value='Sign In' className="btn btn-outline-warning" style={{color:"black", border :"none"}}/></Link> 
                </div>
                <div className="login-box">
                          {this.props.pesan}
                          <h1>
                              Sign Up
                          </h1>
                          
                          <div className="text-box">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <input type="text" placeholder='Username' onChange={(e) => this.setState({registerName : e.target.value})}/>
                          </div>
                          <div className="text-box">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                            <input type="text" placeholder='Email' onChange={(e) => this.setState({registerEmail : e.target.value})}/>
                          </div>
                          <div className="text-box">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            <input type="password" placeholder='Password' onChange={(e) => this.setState({registerPassword : e.target.value})}/>
                          </div>
                          <p>Pastikan Email yang anda masukkan benar dam sesuail, kami akan mengirim data - data ke email tsb.</p>
                          <input type="button" value='Register Now'  className='tombolMasuk' onClick={this.registerBtn}/>
                      </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
  return {
    pesan : state.user.msg
  }
}

export default connect(mapStateToProps, {registerUser})(Register);