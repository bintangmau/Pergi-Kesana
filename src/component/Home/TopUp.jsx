import React, { Component } from 'react';
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'

class TopUp extends Component {
    state = {
        tampungSaldoUser : 0,
        tampungTopUp : 0,
        kenapaKesanaPay: false,
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate()
    }

    componentDidMount() {
        this.getSaldoUser()
    }


    getSaldoUser = () => {
        Axios.post(urlApi + 'saldouser/getsaldouser', { idUser : this.props.id})
        .then((res) => {    
            if(res.data.length === 0) {
                this.setState({ tampungSaldoUser : 0})
            } else {
                this.setState({ tampungSaldoUser : res.data[0].saldoUser})
            }
            // swal('Yeah', 'Get saldo bisa', 'success')
        })
        .catch((err) => {
            swal('Ups', ' Get Failed', 'error')
        })
    }

    
    topUp = () => {
        Axios.post(urlApi + 'saldouser/topup', { saldo : this.state.tampungTopUp, idUser : this.props.id})
        .then((res) => {
            Axios.post(urlApi + 'saldouser/topuphistory', { histori : 'Telah melakukan isi ulang Kesana-PAY sebesar ' + this.state.tampungTopUp + ' USD', idUser : this.props.id,
                    idKategori : 1, waktuHistori : this.state.waktu})
                    .then((res) => {
                        swal('Yeah', 'Top Up Success', 'success')
                        this.setState({ tampungTopUp : ''})
                        this.getSaldoUser()
                    })      
                    .catch((err) => {
                        swal('Ups', ' Top Up Failed history', 'error')
                    })
        })
        .catch((err) => {
            swal('Ups', ' Top Up Failed', 'error')
        })
    }

    bukaDompet = () => {
        Axios.post(urlApi + 'saldouser/bukadompet', { saldoUser : 1, idUser : this.props.id }) //gratis 100 USD ketika buka dompet    
        .then((res) => {
            swal('Yeah', 'Buka Dompet Success', 'success')
            this.getSaldoUser()
        })
        .catch((err) => {
            swal('Ups', ' Buka Dompet Failed', 'error')
        })
    }

    render() {
        if(this.props.id === 0) {
            return <Redirect to='/'/>
        }
        return(
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>Top-Up</h1>
                {
                    this.state.tampungSaldoUser === 0
                    ?
                    <>
                    <div>
                        <center>
                            <button className='btn btn-outline-success' onClick={this.bukaDompet}>
                                Buka Dompet Sebagai {this.props.username} ? 
                            </button>
                        </center>
                    </div>
                    </>
                    :
                    <>
                         <center style={{marginTop: "20px"}}>
                            <button className='btn btn-outline-success' onClick={() => this.setState({ kenapaKesanaPay : true})}>
                                <h5 style={{textAlign: "center"}}>Your Kesana-PAY : {this.state.tampungSaldoUser} USD</h5>
                            </button>
                            {
                                this.state.kenapaKesanaPay === true
                                ?
                                <>
                                <div style={{marginTop: "20px"}}>
                                    <h5 style={{textAlign: "center"}}>Why Kesana-PAY ?</h5>
                                    <p style={{textAlign: "center"}}>- 20% Discount EveryTime !</p>
                                    <p style={{textAlign: "center"}}>- Faster Payment !</p>
                                    <input type="button" value="Close" className='btn btn-outline-danger' onClick={() => this.setState({ kenapaKesanaPay : false})}/>
                                </div>
                                </>
                                :
                                null
                            }
                        </center>
                        <div className="container" style={{marginTop: "35px"}}>
                            <div className="row">
                                <p>Input :</p>
                                <div className="col-md-7">
                                    <input type="number" className='form-control' onChange={(e) => this.setState({ tampungTopUp : e.target.value })} value={this.state.tampungTopUp}/>
                                </div>
                                <div className="col-md-3">
                                    <input type="button" className='btn btn-outline-success btn-block' value="Top-Up" onClick={this.topUp}/>
                                </div>
                            </div>
                        </div>
                    </>
                }
                
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
        username : state.user.username
    }
}
export default connect(mapStateToProps)(TopUp)
