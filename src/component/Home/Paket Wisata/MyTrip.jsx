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
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate()
    }

    componentDidMount() {
        this.getTripUser()
        this.renderTripUser()
        this.getHargaTotal()
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
                            val.statusPeserta === 'Sudah Bayar'
                            ?
                            <>
                            <input type="button" value="Show Details >>" className='btn btn-outline-success'/>
                            </>
                            :
                            <>
                            <Link to={`/payment/${val.idPeserta}`}>
                            <input type="button" value="Pay" className='btn btn-outline-secondary'/>
                            </Link> 
                            <input type="button" value="Cancel Trip" onClick={() => this.cancelTrip(val.idPeserta, val.idPaket)} className='btn btn-danger'/>
                            </>
                        }
                    </td>
                    <td>{val.destinasi}</td>
                    <td>{val.harga}</td>
                    <td>{val.berangkat} - {val.pulang}</td>
                    <td>
                        {
                            val.statusPeserta === 'Sudah Bayar'
                            ?
                            <>
                            <p>Thanks!</p>       
                            </>
                            :
                            <>
                            <h5 style={{color: "red"}}>
                                <Countdown date={Date.now() + val.hitungWaktu} onComplete={() => this.cancelTripNoPay(val.idPeserta, val.idPaket)}/>
                            </h5>
                            <p style={{fontWeight: "bold"}}>Segera lunasi pembayaran Anda !</p>
                            </> 
                        }
                    </td>
                </tr>
            )
        })
    }

    cancelTrip = (id, idPaket) => {
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

    render() {
        if(this.props.id === 0) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1 style={{marginTop: "35px", textAlign: "center"}}>My trip</h1>
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