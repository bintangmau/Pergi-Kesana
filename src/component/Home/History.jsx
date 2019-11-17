import React, { Component } from 'react';
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

class History extends Component {
    state = {
        tampungHistoryTopup: [],
        tampungHistoryRegisterTravel : [],
        tampungCancelTravelHistory: [],
        tampungTransaksiUser: [],
        tampungTransaksiTiket: [],
        topUpShow: false,
        registerTravelShow: false,
        cancelTravelShow: false,
        paymentShow: false,
        paymentTicketShow: false
    }

    componentDidMount() {
        this.getHistoryTopUp()
        this.renderHistoryTopUp()
        this.getHistoryTravelRegister()
        this.renderHistoryRegisterTravel()
        this.getCancelTravelHistory()
        this.renderCancelHistory()
        this.getHistoriTransaksi()
        this.renderHistoryTransaksi()
        this.getTransaksiTiket()
    }

    getHistoryTopUp = () => {
        Axios.post(urlApi + 'history/gethistorysaldouser', { idUser : this.props.id, idKategori : 1})
        .then((res) => {
            this.setState({ tampungHistoryTopup : res.data})
            console.log(this.state.tampungHistoryTopup)
        })
        .catch((err) => {
            swal('Ups', 'Get history failed', 'error')
        })
    }

    getHistoryTravelRegister = () => {
        Axios.post(urlApi + 'history/gethistorysaldouser', { idUser : this.props.id, idKategori : 2})
        .then((res) => {
            this.setState({ tampungHistoryRegisterTravel : res.data})
           
        })
        .catch((err) => {
            swal('Ups', 'Get history failed', 'error')
        })
    }

    getCancelTravelHistory = () => {
        Axios.post(urlApi + 'history/usercanceltravelhistory', { idUser : this.props.id, idKategori : 6})
        .then((res) => {
            this.setState({ tampungCancelTravelHistory : res.data })
        })
        .catch((err) => {
            swal('upz', 'Ga dapet cancen travel histori', 'error')
        })
    }

    getHistoriTransaksi = () => {
        Axios.post(urlApi + 'history/historitransaksiuser', { idUser : this.props.id })
        .then((res) => {
            this.setState({ tampungTransaksiUser : res.data })
        })
        .catch((err) => {
            swal('Ups', 'Get history transaksi failed', 'error')
        })
    }

    getTransaksiTiket = () => {
        Axios.get(urlApi + `history/historitransaksitiket/${this.props.id}`)
        .then((res) => {
            this.setState({ tampungTransaksiTiket: res.data })
        })
        .catch((err) => {
            console.log(err)
            swal('Ups!', 'Get history tiket failed', 'error')
        })
    }

    renderHistoryTopUp = () => {
        if(this.state.tampungHistoryTopup.length === 0) {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>You haven't done anything</td>
                    <td>
                        <Link to={`/topup/${this.props.id}`}>
                        <input type="button" value="Top Up Now" className='btn btn-outline-success'/>
                        </Link>
                    </td>
                </tr>
            )
        } else {
            return this.state.tampungHistoryTopup.map((val, idx) => {
                return (
                    <tr style={{textAlign: "center"}}>
                        <td>Anda {val.histori}</td>
                        <td>{val.waktuHistori}</td>
                    </tr>
                )
            })
        }
    }

    renderHistoryRegisterTravel = () => {
        if(this.state.tampungHistoryRegisterTravel.length === 0) {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>You haven't done anything</td>
                    <td>
                        <Link to='/paketwisata'>
                        <input type="button" value="Trip Now" className='btn btn-outline-success'/>
                        </Link>
                    </td>
                </tr>
            )
        } else {
            return this.state.tampungHistoryRegisterTravel.map((val, idx) => {
                return (
                    <tr style={{textAlign: "center"}}>
                        <td>Anda sebagai {val.histori}</td>
                        <td>{val.waktuHistori}</td>
                    </tr>
                )
            })
        }
    }

    renderCancelHistory = () => {
        return this.state.tampungCancelTravelHistory.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>Anda {val.histori}</td>
                    <td>{val.waktuHistori}</td>
                </tr>
            )
        })
    }

    renderHistoryTransaksi = () => {
        return this.state.tampungTransaksiUser.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>Anda {val.histori}</td>
                    <td>{val.waktuHistori}</td>
                </tr>
            )
        })
    }

    renderHistoryTransaksiTiket = () => {
        return this.state.tampungTransaksiTiket.map((val) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>Anda {val.histori}</td>
                    <td>{val.waktuHistori}</td>
                </tr>
            )
        })
    }

    render() { if(this.props.id === 0) {
        return <Redirect to='/'/>
    }
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                    <h3 style={{textAlign: "center", marginTop: "35px"}}>Your Top-Up Activity</h3>
                    <center>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({ topUpShow: true })}/>
                            </div>
                            <div className="col-md-6"> 
                                <input type="button" value="Close" className='btn btn-danger' onClick={() => this.setState({ topUpShow: false })}/>
                            </div>
                        </div>    
                    </center>
                        <table className='table' style={{marginTop: "35px"}}>
                            <thead className='thead-dark'> 
                                <tr style={{textAlign: "center"}}>
                                    <th>Your Top-Up Activity</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tampungHistoryTopup !== []
                                    ?
                                    <>
                                    {
                                        this.state.topUpShow
                                        ?
                                        <>
                                        {this.renderHistoryTopUp()}
                                        </>
                                        :
                                        null
                                    }
                                    </>
                                   
                                    :
                                    <>
                                    <tr>
                                        <td><p>You have not topped up your balance</p></td>
                                        <td><Link to={`/topup/${this.props.id}`}>Top Up</Link></td>
                                    </tr>
                                    </>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                    <h3 style={{textAlign: "center", marginTop: "35px"}}>Your Register Travel Activity</h3>
                    <center>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({ registerTravelShow: true })}/>
                            </div>
                            <div className="col-md-6"> 
                                <input type="button" value="Close" className='btn btn-danger' onClick={() => this.setState({ registerTravelShow: false })}/>
                            </div>
                        </div>    
                    </center>
                        <table className='table' style={{marginTop: "35px"}}>
                            <thead className='thead-dark'> 
                                <tr style={{textAlign: "center"}}>
                                    <th>Your Register Travel Activity</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.registerTravelShow
                                    ?
                                    <>
                                    {this.renderHistoryRegisterTravel()}
                                    </>
                                    :
                                    null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row" style={{marginTop: "100px"}}>
                    <div className="col-md-6">
                    <h3 style={{textAlign: "center", marginTop: "35px"}}>Your Cancel Travel Activity</h3>
                        <center>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({ cancelTravelShow: true })}/>
                            </div>
                            <div className="col-md-6"> 
                                <input type="button" value="Close" className='btn btn-danger' onClick={() => this.setState({ cancelTravelShow: false })}/>
                            </div>
                        </div>    
                        </center>
                        <table className='table' style={{marginTop: "35px"}}>
                                <thead className='thead-dark'>
                                    <tr style={{textAlign: "center"}}>
                                        <th>Your Cancel Travel Activity</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.cancelTravelShow
                                    ?
                                    <>
                                    {this.renderCancelHistory()}
                                    </>
                                    :
                                    null
                                }
                                </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                    <h3 style={{textAlign: "center", marginTop: "35px"}}>Your Payment Activity</h3>
                    <center>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({ paymentShow: true })}/>
                            </div>
                            <div className="col-md-6"> 
                                <input type="button" value="Close" className='btn btn-danger' onClick={() => this.setState({ paymentShow: false })}/>
                            </div>
                        </div>    
                    </center>
                        <table className='table' style={{marginTop: "35px"}}>
                                <thead className='thead-dark'>
                                    <tr style={{textAlign: "center"}}>
                                        <th>Your Payment Activity</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.paymentShow
                                    ?
                                    <>
                                    {this.renderHistoryTransaksi()}
                                    </>
                                    :
                                    null
                                }
                                </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <h3 style={{textAlign: "center", marginTop: "35px"}}>Your Payment Ticket Activity</h3>
                        <center>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({ paymentTicketShow: true })}/>
                            </div>
                            <div className="col-md-6"> 
                                <input type="button" value="Close" className='btn btn-danger' onClick={() => this.setState({ paymentTicketShow: false })}/>
                            </div>
                        </div>    
                        </center>
                        <table className='table' style={{marginTop: "35px"}}>
                                <thead className='thead-dark'>
                                    <tr style={{textAlign: "center"}}>
                                        <th>Your Payment Ticket Activity</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.paymentTicketShow
                                    ?
                                    <>
                                    {this.renderHistoryTransaksiTiket()}
                                    </>
                                    :
                                    null
                                }
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id : state.user.id
    }
}

export default connect(mapStateToProps)(History);