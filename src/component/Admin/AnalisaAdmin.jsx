import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';

class AnalisaAdmin extends Component {
    state = {
        tampungUserTerdaftar: 0,
        tampungDikunjungiUser: 0,
        tampungTotalTopUp: 0,
        tampungPendaftaranTravel: 0,
        tampungPembatalanTravel: 0,
        tampungTransaksiBerhasil: 0
    }

    componentDidMount() {
        this.userTerdaftar()
        this.dikunjungiUser()
        this.totalTopUp()
        this.pendaftaranTravel()
        this.pembatalanTravel()
        this.transaksiBerhasil()
    }

    userTerdaftar = () => {
        Axios.post(urlApi + 'analisa/userterdaftar')
        .then((res) => {
            this.setState({ tampungUserTerdaftar : res.data[0].userTerdaftar })
        })
        .catch((err) => {
            swal('Yeh', 'Get User Terdaftar', 'error')
        })
    }

    dikunjungiUser = () => {
        Axios.post(urlApi + 'analisa/dikunjungiuser')
        .then((res) => {
            this.setState({ tampungDikunjungiUser : res.data[0].dikunjungiUser })
        })
        .catch((err) => {
            swal('Yeh', 'Get dikunjungi User Terdaftar', 'error')
        })
    }

    totalTopUp = () => {
        Axios.post(urlApi + 'analisa/totaltopup')
        .then((res) => {
            this.setState({ tampungTotalTopUp : res.data[0].totalTopUp })
        })
        .catch((err) => {
            swal('Yeh', 'Get total topuop', 'error')
        })
    }

    pendaftaranTravel = () => {
        Axios.post(urlApi + 'analisa/pendaftarantravel')
        .then((res) => {
            this.setState({ tampungPendaftaranTravel : res.data[0].pendaftaranTravel })
        })
        .catch((err) => {
            swal('Yeh', 'Get Pendaftaran Travek', 'error')
        })
    }

    pembatalanTravel = () => {
        Axios.post(urlApi + 'analisa/pembatalantravel')
        .then((res) => {
            this.setState({ tampungPembatalanTravel : res.data[0].pembatalanTravel })
        })
        .catch((err) => {
            swal('Yeh', 'Get pembatalan Travek', 'error')
        })
    }

    transaksiBerhasil = () => {
        Axios.post(urlApi + 'analisa/transaksiberhasil')
        .then((res) => {
            this.setState({ tampungTransaksiBerhasil : res.data[0].transaksiBerhasil})
        })
        .catch((err) => {
            swal('Yeh', 'Get transaksi Travel', 'error')
        })
    }

    render() {
        if(this.props.username === ''){
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Analisa</h2>
                <div className="container-fluid" style={{marginTop: "35px"}}>
                    <div className="row">
                        <div className="col-md-3" style={{textAlign: "center"}}>
                            <h4>User Terdaftar</h4>
                            <h1 style={{fontWeight: "bold", margin: "30px"}}>{this.state.tampungUserTerdaftar}</h1>
                            <Link to='/manageusers'>Show More >></Link>
                        </div>
                        <div className="col-md-3" style={{textAlign: "center"}}>
                            <h4>Kunjungan User</h4>
                            <h1 style={{fontWeight: "bold", margin: "30px"}}>{this.state.tampungDikunjungiUser}</h1>
                            <Link>Show More >></Link>
                        </div>
                        <div className="col-md-3" style={{textAlign: "center"}}>
                            <h4>User Isi Ulang</h4>
                            <h1 style={{fontWeight: "bold", margin: "30px"}}>{this.state.tampungTotalTopUp}</h1>
                            <Link to='/userisiulang'>Show More >></Link>
                        </div>
                        <div className="col-md-3" style={{textAlign: "center"}}>
                            <h4>Pendaftaran Travel</h4>
                            <h1 style={{fontWeight: "bold", margin: "30px"}}>{this.state.tampungPendaftaranTravel}</h1>
                            <Link to='/registrasitravel'>Show More >></Link>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "35px"}}>
                        <div className="col-md-3" style={{textAlign: "center"}}>
                            <h4>Pembatalan Travel</h4>
                            <h1 style={{fontWeight: "bold", margin: "30px"}}>{this.state.tampungPembatalanTravel}</h1>
                            <Link to='/pembatalantravel'>Show More >></Link>
                        </div>
                        <div className="col-md-3" style={{textAlign: "center"}}>
                            <h4>Transaksi Berhasil</h4>
                            <h1 style={{fontWeight: "bold", margin: "30px"}}>{this.state.tampungTransaksiBerhasil}</h1>
                            <Link to='/transaksiberhasil'>Show More >></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps)(AnalisaAdmin);
