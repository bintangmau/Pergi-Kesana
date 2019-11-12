import React, { Component } from 'react';
import swal from 'sweetalert'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

class TiketDetails extends Component {
    state = {
        tampungGetBookingTiket: [],
        paymentShow: false,
        tampungSaldoUser: 0,
        waktu: new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate(),
        namaPenumpang: '',
        usiaPenumpang: 0,
        alamatPenumpang: ''
    }

    componentDidMount() {
        this.getBookingTiket()
        this.renderBookingTiket()
        this.getSaldoUser()
    }

    getBookingTiket = () => {
        Axios.post(urlApi + 'tiket/getbookingtiket', { id : this.props.match.params.id })
        .then((res) => {
            this.setState({ tampungGetBookingTiket : res.data })
            // console.log(this.state.tampungGetBookingTiket)
            // swal('Ye!', 'Get bisa', 'success')
        })
        .catch((err) => {
            console.log(err)
            swal('Ups!', 'Get error', 'error')
        })
    }

    renderBookingTiket = () => {
        return this.state.tampungGetBookingTiket.map((val) => {
            return (
                <div>
                    <p>{val.maskapai} - Plane {val.kodepesawat}</p>
                    <p>To: {val.ke}</p>
                    <p>From: {val.dari}</p>
                    <p>Departure: {val.berangkat} {val.time}</p>
                    <p>Seat: {val.seat}</p>
                    <p style={{color: "red", fontWeight: "bold"}}>Price: {val.price}</p>
                </div>
            )
        })
    }

    getSaldoUser = () => {
        Axios.post(urlApi + 'saldouser/getsaldouser', { idUser : this.props.id })
        .then((res) => {
            this.setState({ tampungSaldoUser : res.data[0].saldoUser})
        })
        .catch((err) => {
            swal('Ups', 'Get saldo', 'error')
        })
    }

    bayarTiket = () => {
        if(this.state.namaPenumpang === '') {
            swal('Alert!', 'Masukkan Nama!', 'warning')
        } else if(this.state.usiaPenumpang === 0) {
            swal('Alert!', 'Masukkan Usia!', 'warning')
        } else if(this.state.alamatPenumpang === '') {
            swal('Alert!', 'Masukkan Alamat!', 'warning')
        } else if(this.state.tampungGetBookingTiket[0].price > this.state.tampungSaldoUser) {
            swal('Ups', 'Saldomu Kurang', 'warning')
        } else if(this.state.tampungGetBookingTiket[0].price - this.state.tampungSaldoUser === 0) {
            swal('Ups!', 'Saldo minimal Kesana-PAY 1 USD bro', 'warning')
        } else {
            Axios.post(urlApi + 'payment/paymenttiket', { 
                idUser : this.props.id, 
                hargaTiket : this.state.tampungGetBookingTiket[0].price, 
                waktuBayar: this.state.waktu,
                namaPenumpang: this.state.namaPenumpang,
                usiaPenumpang: this.state.usiaPenumpang,
                alamatPenumpang: this.state.alamatPenumpang,
                idTiket: this.props.match.params.id,
                idUser: this.props.id
            })
            .then(() => {
                swal('Congrats', 'Payment Success', 'success')
            })
            .catch((err) => {
                console.log(err)
                swal('Ups!', 'Payment Failed', 'error')
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <center>
                    <h2 style={{textAlign: "center", marginTop: "35px"}}>Booking Ticket</h2>
                </center>
                    <div style={{marginTop:"35px"}} className='row'>
                        <div className="col-md-6">
                            {this.renderBookingTiket()}
                        </div>
                        <div className="col-md-6" style={{padding: "10px"}}>
                            <h4>Form</h4>
                            <input type="text" className='form-control' placeholder="Name" onChange={(e) => this.setState({namaPenumpang: e.target.value})}/>
                            <input type="number" className='form-control' placeholder="Age" onChange={(e) => this.setState({usiaPenumpang: e.target.value})}/>
                            <input type="text" className='form-control' placeholder="Address" onChange={(e) => this.setState({alamatPenumpang: e.target.value})}/>
                            <center>
                                <p style={{marginTop: "35px"}}>Payment Method</p>
                            </center>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="button" className='btn btn-dark btn-block' value="ATM Transfer" onClick={() => this.setState({ paymentShow : false })}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="button" className='btn btn-success btn-block' value="Kesana-PAY" onClick={() => this.setState({ paymentShow : true })} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        !this.state.paymentShow
                        ?
                        <div>
                            ATM Transfer
                        </div>
                        :
                        <div>
                            <center style={{marginTop: "20px"}}>
                                <p>Your Balance: <span style={{color: "red"}}>{this.state.tampungSaldoUser} USD</span> </p>
                            </center>
                            <div>
                                <h5 style={{fontWeight: 'bold', textAlign: "center"}}>Syarat & Ketentuan</h5>
                                <p style={{marginTop: '10px'}}>
                                    1. Pembatalan tiket, makan Saldo hanya akan dikembalikan 80% <br/>
                                    2. Syarat dan ketentuan berlaku
                                </p>
                            </div>
                            <center>
                                <input type="button" value="Pay" className='btn btn-outline-success' onClick={this.bayarTiket}/>
                            </center>
                        </div>
                    }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
    }
}

export default connect(mapStateToProps)(TiketDetails);