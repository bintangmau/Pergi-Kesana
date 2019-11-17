import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'



class ProgressTrip extends Component {
    state = {
        tampungPeserta: [],
        loadingConfirm: false,
        modal13: false,
        tampungBuktiTransfer: [],
        showBuktiTF : false,
        selectedDataTF: {},
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate()
    }

    componentDidMount() {
        this.getPeserta()
        this.renderPeserta()
    }

    getPeserta = () => {
        Axios.get(urlApi + 'managetravel/getpeserta/' + this.props.match.params.id)
        .then((res) => {
            this.setState({ tampungPeserta : res.data })
            // swal('Success', 'Get iso', 'success')
        })
        .catch((err) => {
            console.log(err)
            swal('Error', 'Get gagal', 'error')
        })
    }

    // getNamaUser = () => {
    //     Axios.post(urlApi + 'managetravel/getnamauser' { })
    // }

    paymentConfirm = (idPeserta) => {
        this.setState({ loadingConfirm: true })
        Axios.put(urlApi + 'payment/paymentconfirm', { idPeserta, idUser: this.props.id, waktu: this.state.waktu })
        .then((res) => {
            this.getPeserta()
            this.setState({ loadingConfirm: false })
            console.log(res.data)
            swal('Ye!', 'Confirm Success', 'success')
        })
        .catch((err) => {
            console.log(err)
            this.setState({ loadingConfirm: false })
            swal('Ups', 'Edit gagal', 'error')
        })
    }

    renderBuktiTF = () => {
        return (
            <div>
                <img src={urlApi + this.state.selectedDataTF.buktiTF} style={{width: "300px", height: "300px"}}/> <br/>
                <input type="button" value="Close" className='btn btn-danger' onClick={() => this.setState({ showBuktiTF: false})}/>
            </div>
        )
    }

    renderPeserta = () => {
        return this.state.tampungPeserta.map((val, idx) => {
            return(
                <tr style={{textAlign: "center"}}>
                    <td>{val.namaPeserta}</td>
                    <td>{val.usiaPeserta}</td>
                    <td>{val.idUser}</td>
                    <td>{val.status}</td>
                    <td>{val.noPaspor}</td>
                    <td>{val.noTelp}</td>
                    <td>{val.alamat}</td>
                    <td>
                                {
                                    val.status === 'Menunggu Konfirmasi'
                                    ?
                                    <>
                                       <div className="row">
                                            <div className="col-md-6">
                                                <input type="button" value="Confirm" className='btn btn-success btn-block' onClick={() => this.paymentConfirm(val.id)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="button" value="Show" className='btn btn-dark btn-block' onClick={() => this.setState({ selectedDataTF: val, showBuktiTF: true })}/>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    {
                                        val.status === 'Belum Bayar'
                                        ?
                                        <p>Menunggu Pembayaran</p>
                                        :
                                        <p>Clear</p>
                                    }
                                    </>
                                }
                    </td>
                </tr>
            )
        })
    }


    render() {
        // if(this.props.username === '') {
        //     return <Redirect to='/'/>
        //   }
        return(
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>Progress</h1>
                {
                    this.state.showBuktiTF
                    ?
                    <>
                    {this.renderBuktiTF()}
                    </>
                    :
                    null
                }
                {
                    this.state.loadingConfirm
                    ?
                    <center>
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </center>
                    :
                    null
                }
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Name</th>
                            <th>Age</th>
                            <th>ID User</th>
                            <th>Status</th>
                            <th>Paspor</th>
                            <th>Telp</th>
                            <th>Address</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPeserta()}
                    </tbody>
                </table>
               
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      username : state.user.username,
      id: state.user.id
    } 
  }
  
  export default connect(mapStateToProps)(ProgressTrip);