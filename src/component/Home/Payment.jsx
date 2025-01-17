import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database'
import swal from 'sweetalert';

class Payment extends Component {
    state = {
        tampilMethod : true,
        tampungHargaPerItem : 0,
        tampungBatasBayar : '',
        tampungDestinasi: '',
        tampungPasswordPembayaran: '',
        tampungSaldoUser: 0,
        tampungIDPaket: 0,
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate(),
        outPayment: false,
        loadingPayment: false,
        tampungEditEmail: '',
        correctEmail: false,
        buktiTransfer: '',
        simpanIDpaket: 0
    }

    componentDidMount() {
        this.getHargaPerItem()
        this.getSaldoUser()
        this.getIDpaket()
    }

    getHargaPerItem = () => {
        Axios.post(urlApi + 'travel/gethargaperitem', { idPaket : this.props.match.params.id })
        .then((res) => {
            this.setState({ tampungHargaPerItem : res.data[0].harga, tampungBatasBayar : res.data[0].batasBayar, tampungDestinasi : res.data[0].destinasi, tampungIDPaket: res.data[0].id })
            // swal('Yeah', 'GEt bisaharga', 'success')
            // console.log(this.state.tampungHargaTotal)
        })
        .catch((err) => {
            swal('Yeah', 'GEt gagal di hargatotal', 'error')
        })
    }

    getSaldoUser = () => {
        Axios.post(urlApi + 'payment/getsaldouser', { idUser : this.props.id })
        .then((res) => {
            this.setState({ tampungSaldoUser : res.data[0].saldoUser})
        })
        .catch((err) => {
           this.setState({ tampungSaldoUser: 0})
        })
    }

    paymentKesanaPay = () => {
        this.setState({ loadingPayment: true})
        if(this.state.tampungSaldoUser < this.state.tampungHargaPerItem * 80/100) {
            swal('Ups', `Saldomu kurang ${(this.state.tampungHargaPerItem * 80/100) - this.state.tampungSaldoUser} USD`, 'error' )
        } else if ( this.state.tampungSaldoUser - this.state.tampungHargaPerItem * 80/100 === 0) {
            swal('Ups', 'Saldo minimal Kesana-PAY adalah 1 USD !', 'warning')
        } else {
            Axios.post(urlApi + 'payment/kurangsaldouser', {hargaTotal : this.state.tampungHargaPerItem * 80/100, idUser: this.props.id})
            .then(() => {
                Axios.post(urlApi + 'payment/tambahsaldoadmin', {
                    saldoAdmin: this.state.tampungHargaPerItem * 80/100,
                    idUser: this.props.id,
                    waktuPemasukan: this.state.waktu
                })
                .then(() => {
                    this.getSaldoUser()
                    Axios.post(urlApi + 'payment/gantistatusbayar', { idPeserta: this.props.match.params.id, idUser: this.props.id, idPaket: this.state.tampungIDPaket })
                    .then(() => {
                        Axios.post(urlApi + 'payment/historikesanapay', {
                            histori: "Telah melakukan pembayaran Travel menuju " + this.state.tampungDestinasi + ", Sebesar " + this.state.tampungHargaPerItem * 80/100 + " USD",
                            idUser: this.props.id,
                            idKategori: 5,
                            waktuHistori: this.state.waktu
                        })
                        .then(() => {
                            Axios.post(urlApi + 'payment/kirimemailuser', { idPeserta: this.props.match.params.id })
                            .then(() => {
                                this.setState({ outPayment : true, loadingPayment: false })
                                swal('Congrats', 'Transaksi Berhasil', 'success')
                            })
                            .catch((err) => {
                                console.log(err)
                                this.setState({ loadingPayment: false, correctEmail: true })
                                swal('Ups', 'Transaksi Gagal di Kirim Email!', 'error')
                            })
                        })
                        .catch((err) => {
                            this.setState({ loadingPayment: false })
                            swal('Ups', 'Transaksi Gagal !', 'error')
                        })
                    })
                    .catch((err) => {
                        this.setState({ loadingPayment: false })
                        swal('Ups', 'Status gagal berubah!', 'error')
                    })
                })
                .catch((err) => {
                    this.setState({ loadingPayment: false })
                    swal('Ups', 'Saldo admin ga berkurang', 'error')
                })
            })
            .catch((err) => {
                this.setState({ loadingPayment: false })
                swal('Ups', 'Saldo gagal berkurang', 'error')
            })
        }
    }

    
    imagePost = (e) => {
        // console.log(e.target.files)
        if(e.target.files[0]) {
            this.setState({ buktiTransfer: e.target.files })
        } else {
            this.setState({ buktiTransfer: null })
        }
    }

    getIDpaket = () => {    
        Axios.get(urlApi + 'payment/getidpaket/' + this.props.match.params.id)
        .then((res) => {
            this.setState({ simpanIDpaket: res.data[0].idPaket})
        })
        .catch((err) => {
            console.log(err)
            swal('get gabisa', 'ups', 'error')
        })
    }

    uploadBuktiTf = () => {
        const bodyFormData = new FormData()

        var options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        var data = {
            idUser:  this.props.id,
            idPaket: this.state.simpanIDpaket,
            idPeserta: this.props.match.params.id,
            jenisBukti: "Travel"
        }

        bodyFormData.append('data', JSON.stringify(data))
        bodyFormData.append('image', this.state.buktiTransfer[0])

            if(this.state.buktiTransfer === '') {
                swal('Alert!', 'Masukkan Gambar', 'warning')
            } else {
                this.setState({ loadingPayment: true })
                Axios.post(urlApi + 'payment/buktitransfer', bodyFormData, options)
                .then(() => {
                Axios.post(urlApi + 'payment/atmpayment', { 
                    saldoAdmin: this.state.tampungHargaPerItem, 
                    idUser: this.props.id, 
                    waktuPemasukan: this.state.waktu, 
                    idPeserta: this.props.match.params.id 
                    })
                .then(() => {
                    this.setState({ loadingPayment: false })
                    swal(`Selamat ${this.props.username} !`, `Transaksi Berhasil!`, 'success')
                })
                .catch((err) => {
                    console.log(err)
                    swal('Ups', 'Saldoadmin gamasuk', 'error')
                })
                })
                .catch((err) => {
                    console.log(this.state.buktiTransfer[0])
                    swal('Ups', 'Upload bukti TF gagal', 'error')
                })
            }
        }



    render() {
        if(this.props.id === 0 || this.state.outPayment === true) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                 <h1 style={{textAlign: "center", marginTop: "35px"}}>Payment</h1>
                <div className="container" style={{marginTop: "25px",padding: "20px"}}>
                    <h3 style={{textAlign: "center"}}>Payment Method</h3>
                    <h5>{this.state.tampungDestinasi}</h5>
                    <h5 style={{color: "red"}}>Batas Bayar : {this.state.tampungBatasBayar}</h5>
                    <div className="row">
                        <div style={{backgroundColor: "black"}} className="col-md-6">
                            <button className='btn btn-outline-secondary btn-block' onClick={() => this.setState({ tampilMethod : true })}>
                                <h5 style={{textAlign: "center", padding: "20px", color: "white"}}>ATM Transfer</h5>
                                <p style={{color: "white", fontWeight: "bold"}}>({this.state.tampungHargaPerItem} USD)</p>
                            </button>
                        </div>
                        <div style={{backgroundColor: "green"}} className="col-md-6">
                        <button className='btn btn-outline-success btn-block' onClick={() => this.setState({ tampilMethod : false })}>
                                <h5 style={{textAlign: "center", padding: "20px", color: "white"}}>Kesana-PAY</h5>
                                <p style={{color: "white", fontWeight: "bold"}}>
                                    <span>Discount 20%</span>({this.state.tampungHargaPerItem * 80/100} USD)
                                </p>
                            </button>
                        </div>
                    </div>
                    {
                        this.state.tampilMethod === true 
                        ?<>
                        <div>
                            <h2 style={{marginTop: "35px", textAlign: "center"}}>ATM-Transfer Method</h2>
                            <center>
                                <p>Upload bukti Transer Anda, dan Tunggu konfirmasi</p>
                                <div className='row' style={{width: "600px", marginTop: "20px"}}>
                                    <div className="col-md-9">
                                        <input type="file" className='form-control' onChange={this.imagePost}/>
                                    </div>
                                    <div className="col-md-3">
                                    {
                                        this.state.loadingPayment
                                        ?
                                        <>
                                        <center>
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </center>
                                            </>
                                            :
                                        <input type="button" value="Upload" className='btn btn-success btn-block' onClick={this.uploadBuktiTf}/>
                                    }
                                    </div>
                                </div>    
                            </center>
                        </div>
                        </>
                        :
                        <>
                        <div>
                            <center>
                                {
                                    this.state.tampungSaldoUser < 1
                                    ?
                                    <Link to={`/topup/${this.props.id}`}>
                                    <input type="button" value="Top Up Kesana-PAY" style={{marginTop: "35px"}} className='btn btn-outline-success'/>
                                    </Link>    
                                    :
                                    <Link to={`/topup/${this.props.id}`}>
                                    <input type="button" value={"Your Kesana-PAY " + this.state.tampungSaldoUser + " USD"} style={{marginTop: "35px"}} className='btn btn-outline-success'/>
                                    </Link>
                                }
                            </center>
                            <h3 style={{textAlign: "center", marginTop: "35px"}}>Kesana-PAY Payment Method</h3>
                            <h5 style={{marginTop: "20px", marginBottom: "20px"}}>Syarat dan Ketentuan</h5>
                            <p>1. Anda mendapatkan diskon sebesar 20% dari <span style={{fontWeight: "bold"}}>Pergi-Kesana</span> secara resmi.</p>
                            <p>2. Setelah pembayaran berhasil saldo tidak bisa dikembalikan kecuali ada pembatalan Travel dikarenakan ada Emergency.</p>
                            <p>3. <span style={{fontWeight: "bold"}}>Pergi-Kesana</span> Berhak mencabut diskon ini sewaktu2 selama User belum melakukan pembayaran.</p>
                            <p>4. Setelah pembayaran berhasil, User akan menerima email dari <span style={{fontWeight: "bold"}}>Pergi-Kesana</span> berupa Tiket penerbangan dan E-Card yang dapat 
                                digunakan sepanjang Tour.</p>
                            <p>5. Jika ada kendala Silahkan hubungi Kami.</p>
                           <div style={{marginTop: "35px"}}>
                               <p>Next jika anda setuju dengan setiap ketentuan dari Kami</p>
                               {
                                   this.state.correctEmail
                                   ?
                                   <>
                                    <input type="text" placeholder='Correct Your Email' onChange={(e) => this.setState({ tampungEditEmail: e.target.value})}/>
                                    <input type="button" value="Correct Email" className='btn btn-outline-success' onClick={this.correctEmail}/>
                                   </>
                                   :
                                    null
                               }
                               {
                                   this.state.loadingPayment
                                   ?
                                   <>
                                   <center>
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </center>
                                    </>
                                    :
                                    <input type="button" value="Pay" className='btn btn-outline-success btn-block' onClick={this.paymentKesanaPay}/>
                               }
                           </div>
                        </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
        password : state.user.password,
        username: state.user.username
    }
}

export default connect(mapStateToProps)(Payment);