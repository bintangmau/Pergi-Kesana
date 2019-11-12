import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { urlApi } from '../../helper/database';
import swal from 'sweetalert'
import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'

class ManageUsers extends Component {
    state = {
        tampungManageUsers: [],
        waktu: moment().format('ll'),
        tampilPencarian: false,
        inputPencarian: '',
        tampungHasilPencarian: []
    }

    componentDidMount() {
        this.getManageUsers()
        this.renderManageUser()
    }

    // componentDidUpdate() {
    //     this.getManageUsers()
    //     this.renderManageUser()
    // }

    getManageUsers = () => {
        Axios.post(urlApi + 'manageuser/getmanageusers')
        .then((res) => {
            this.setState({ tampungManageUsers : res.data})
            // console.log(this.state.tampungManageUsers)
            // swal ('Error', 'get user bisa bro', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get gagal', 'error')
        })
    }

    renderManageUser = () => {
        return this.state.tampungManageUsers.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.status}</td>
                    <td><input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteUsers(val.id, val.username)}/></td>
                </tr>
            )
        })
    }

    deleteUsers = (idParam, namaUser) => {
        if(window.confirm('Are you Sure to Delete this User ?')) {
            Axios.post(urlApi + 'manageuser/deleteusers', { id : idParam})
            .then((res) => {
                Axios.post(urlApi + 'history/adminhistori', {
                    histori: 'Admin telah menghapus User bernama ' + namaUser,
                    idUser: 1,
                    idKategori: 7,
                    waktuHistori: this.state.waktu
                })
                .then((res) => {
                    swal ('Ye!', 'Delete success', 'success')
                    this.getManageUsers()
                })
            })
            .catch((err) => {
                swal ('Error', 'gagal delete', 'error')
            })
            }
    }

    cariUser = () => {
        Axios.post(urlApi + 'manageuser/cariuser', { username : this.state.inputPencarian })
        .then((res) => {
            this.setState({ tampungHasilPencarian: res.data })
            if(this.state.tampungHasilPencarian.length === 0) {
                swal('Ye!', 'User tidak ditemukan !', 'warning')
            } 
        })
        .catch((err) => {
            console.log(err)
            swal('Ups', 'Pencarian gagal!', 'error')
        })
    }

    renderHasilCari = () => {
        return this.state.tampungHasilPencarian.map((val) => {
            return (
                <tr>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.status}</td>
                    <td><input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteUsers(val.id, val.username)}/></td>
                </tr>
            )
        })
    }

    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>manageuser</h1>
                <div style={{width: "300px", float: "right"}}>
                    <input type="button" value="Search" className='btn btn-outline-warning' style={{margin: "20px"}} onClick={() => this.setState({ tampilPencarian : true})}/>
                    <input type="button" value="Back" className='btn btn-outline-dark' style={{margin: "20px"}} onClick={() => this.setState({ tampilPencarian: false})}/> <br />
                </div>
                {
                    this.state.tampilPencarian === false
                    ?
                    null
                    :
                    <>
                    <div className="row" style={{float: "left"}}>
                        <div className="col-md-9">
                            <input type="text" className='form-control' style={{margin: "20px"}} onChange={(e) => this.setState({ inputPencarian : e.target.value })}/>
                        </div>
                        <div className="col-md-3">
                            <input type="button" value="Cari" className='btn btn-outline-warning' style={{margin: "20px"}} onClick={this.cariUser}/>
                        </div>
                    </div>
                    </>
                }


                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tampilPencarian === false
                            ?
                            <>
                            {this.renderManageUser()}
                            </>
                            :
                            <>
                            {this.renderHasilCari()} 
                            </>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      username : state.user.username,
      role : state.user.role
    } 
  }
  
  export default connect(mapStateToProps)(ManageUsers);