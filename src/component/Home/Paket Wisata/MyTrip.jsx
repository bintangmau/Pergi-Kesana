import React, { Component } from 'react';
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Countdown from 'react-countdown-now'


class MyTrip extends Component {
    state = {
        tampungTripUser: [],
        tampungHargaTotal: 0,
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate(),
        tripOrTiket: false,
        tampungTiketUser: []
    }

    componentDidMount() {
        this.getTripUser()
        this.renderTripUser()
        this.getHargaTotal()
        this.getMyTicket()
        this.renderMyTicket()
    }


    getTripUser = () => {
        Axios.post(urlApi + 'travel/gettripuser', { idUser : this.props.id})
        .then((res) => {
            this.setState({ tampungTripUser : res.data})
            // swal('Yeah', 'GEt bisa', 'success')
            // console.log(res.data)
        })
        .catch((err) => {
            swal('Yeah', 'GEt gagal disini JANCOKAsu', 'error')
            console.log(err)
        })
    }

    getHargaTotal = () => {
        Axios.post(urlApi + 'travel/gethargatotal', { idUser : this.props.id})
        .then((res) => {
            this.setState({ tampungHargaTotal : res.data[0].totalHarga})
            // swal('Yeah', 'GEt bisaharga', 'success')
            // console.log(this.state.tampungHargaTotal)
        })
        .catch((err) => {
            swal('Yeah', 'GEt gagal di hargatotal', 'error')
        })
    }


    renderTripUser = () => {
        return this.state.tampungTripUser.map((val, idx) => {
            return (
                
                <tr key={idx} style={{textAlign: "center"}}>
                    <td>{val.namaPeserta}</td>
                    <td>{val.usiaPeserta}</td>
                    <td>{val.noPaspor}</td>
                    <td>{val.noTelp}</td>
                    <td>{val.alamat}</td>
                    <td>
                        {val.statusPeserta} <br/>
                        {
                            val.statusPeserta === 'Belum Bayar'
                            ?
                            <>
                            <Link to={`/payment/${val.idPeserta}`}>
                            <input type="button" value="Pay" className='btn btn-outline-secondary'/>
                            </Link> 
                            <input type="button" value="Cancel Trip" onClick={() => this.cancelTrip(val.idPeserta, val.idPaket)} className='btn btn-danger'/>
                            </>
                            :
                            <>
                            {
                                val.statusPeserta === 'Sudah Bayar'
                                ?
                                <input type="button" value="Show Details >>" className='btn btn-outline-success'/>
                                :
                                <p>Tunggu maksimal 3 Hari Setelah pembayaran <br/>Jika belum, uang anda kembali 100%</p>
                            }
                            </>
                        }
                    </td>
                    <td>{val.destinasi}</td>
                    <td>{val.harga}</td>
                    <td>{val.berangkat} - {val.pulang}</td>
                    <td>
                        {
                            val.statusPeserta === 'Belum Bayar'
                            ?
                            <>
                            <h5 style={{color: "red"}}>
                                <Countdown date={Date.now() + val.hitungWaktu} onComplete={() => this.cancelTripNoPay(val.idPeserta, val.idPaket)}/>
                            </h5>
                            <p style={{fontWeight: "bold"}}>Segera lunasi pembayaran Anda !</p>
                            </> 
                            :
                            <>
                            {
                                val.statusPeserta === 'Sudah Bayar'
                                ?
                                <p>Thanks!</p>       
                                :
                                <>
                                <input type="button" value="Cancel" className='btn btn-danger btn-block' onClick={() => this.cancelTrip(val.idPeserta, val.idPaket)}/>
                                <p>Uang dikembalikan 100% ke Rek Pengirim</p>
                                </>
                            }
                            </>
                        }
                    </td>
                </tr>
            )
        })
    }

    cancelTrip = (id, idPaket) => {
        if(window.confirm('Are you Sure to Cancel this Trip ?')) {
            Axios.post(urlApi + 'travel/canceltrip', {id : id, idPaket : idPaket})
            .then(() => {
                Axios.post(urlApi + 'travel/canceltriphistory', { histori : 'Telah membatalkan Pendaftaran Travel', idUser : this.props.id, idKategori : 6, 
                                waktuHistori : this.state.waktu })
                .then(() => {
                    this.getTripUser()
                    this.getHargaTotal()
                    swal('Succes', 'Delete Success', 'success')
                })
                .catch((err) => {
                    swal('Succes', 'Delete History Failed', 'error')    
                })
            })
            .catch((err) => {
                swal('Succes', 'Delete Failed', 'error')
            })
        }
    }

    cancelTripNoPay = (id, idPaket) => {
        Axios.post(urlApi + 'travel/canceltripnopay', { id : id, idPaket : idPaket})
        .then(() => {
            Axios.post(urlApi + 'travel/canceltriphistory', { histori : 'Tidak membayar, dan Travel dibatalkan', idUser : this.props.id, idKategori : 6, 
                            waktuHistori : this.state.waktu })
            .then(() => {
                this.getTripUser()
                swal('Registration Cancelled', 'Kon seh ga bayar2!', 'warning')
            })
            .catch((err) => {
                console.log(err)
                swal('Succes', 'Post History Failed', 'error')    
            })
        })
        .catch((err) => {
            console.log(err)
            swal('Succes', 'Delete Registration Failed', 'error')
        })
    }


    hitungTimeOut = (time1) => {
        var difference = time1 - new Date()
    }


    getMyTicket = () => {
        Axios.post(urlApi + 'tiket/getmytiket', { idUser : this.props.id })
        .then((res) => {
            this.setState({ tampungTiketUser: res.data })
        })
        .catch((err) => {
            console.log(err)
            swal('Ups!', 'get gagal', 'error')
        })
    }

    renderMyTicket = () => {
        return this.state.tampungTiketUser.map((val) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.namaPenumpang}</td>
                    <td>{val.alamatPenumpang}</td>
                    <td>{val.maskapai} - {val.kodepesawat}</td>
                    <td>{val.dari} - {val.ke}</td>
                    <td>{val.berangkat} {val.time}</td>
                    <td>{val.statusPenumpang}</td>
                </tr>
            )
        })
    }

    render() {
        if(this.props.id === 0) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <center style={{marginTop: "35px"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <button className='btn btn-outline-dark btn-block' onClick={() => this.setState({ tripOrTiket: false })}>
                                <p style={{ textAlign: "center"}}>My trip</p>
                            </button>   
                        </div>
                        <div className="col-md-6">
                            <button className='btn btn-outline-dark btn-block' onClick={() => this.setState({ tripOrTiket : true })}>
                                <p style={{ textAlign: "center"}}>My Ticket</p>
                            </button>
                        </div>
                    </div>
                </center>
                {
                    this.state.tripOrTiket
                    ?
                    <table className='table' style={{marginTop: "35px"}}>   
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Flights</th>
                                <th>Destination</th>
                                <th>Date Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                          {this.renderMyTicket()}
                        </tbody>

                    </table>
                    :
                    <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Passport</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>To</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Hitung Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTripUser()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    {
                                        this.state.tampungHargaTotal === null
                                        ?
                                        <input type="button" value="can't pay" className='btn btn-outline-secondary btn-block'/>
                                        :
                                        <Link to={`/paymentall/${this.props.id}`}>
                                        <input type="button" value={`Pay All : ${this.state.tampungHargaTotal} USD`} className='btn btn-outline-secondary btn-block'/>
                                    </Link>
                                    }
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        id: state.user.id
    }
}

export default connect(mapStateToProps)(MyTrip);