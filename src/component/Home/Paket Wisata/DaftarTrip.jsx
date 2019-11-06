import React, { Component } from 'react';
import './PaketWisata.css'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'
import moment from 'moment'

class DaftarTrip extends Component {
    state = {
        tampungDaftarTrip: [],
        tampungNama: '',
        tampungUsia: 0,
        tampungPaspor: '',
        tampungAlamat: '',
        tampungTelpon: 0,
        tampungNamaTravel: '',
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate()
    }

    componentDidMount() {
        this.getNamaTravel()
    }

    daftarTrip = () => {
        Axios.post(urlApi + 'travel/daftartrip', { namaPeserta : this.state.tampungNama, usiaPeserta : this.state.tampungUsia, idUser : this.props.id,
                                                   idPaket : this.props.match.params.id, status : 'Belum Bayar', noPaspor: this.state.tampungPaspor, alamat: this.state.tampungAlamat,
                                                    noTelp: this.state.tampungTelpon })
                                                
            .then((res) => {
                Axios.post(urlApi + 'travel/daftartriphistory', { histori : this.state.tampungNama + ' Telah medaftar Travel menuju ' + this.state.tampungNamaTravel, 
                idUser : this.props.id, idKategori : 2, waktuHistori : this.state.waktu })
                .then((res) => {
                    swal('Congrats', 'Register Travel Success', 'success')
                })
                .catch((err) => {
                    swal('Error', 'Something is Wrong in History', 'error')    
                })
            })
            .catch((err) => {
                swal('Error', 'Something is Wrong', 'error')
            })
    }

    getNamaTravel = () => {
        Axios.post(urlApi + 'travel/getnamatravel', { idPaket : this.props.match.params.id})
        .then((res) => {
            this.setState({ tampungNamaTravel : res.data[0].destinasi})
            // swal('Congrats', 'Get Name of Travel Success', 'success')
        })
        .catch((err) => {
            swal('Error', 'Something is Wrong', 'error')
        })
    }


    render() {
        return (
            <div>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Trip Form</h2>
                <div className='container' style={{marginTop: "35px"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Name: </h5>  
                            <input type="text" className='form-control' onChange={(e) => this.setState({ tampungNama : e.target.value})}/>
                        </div>
                        <div className="col-md-6">
                            <h5>Age : </h5>
                            <input type="number" className='form-control' onChange={(e) => this.setState({ tampungUsia : e.target.value})}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Paspor Number: </h5>  
                            <input type="text" className='form-control' onChange={(e) => this.setState({ tampungPaspor : e.target.value})}/>
                        </div>
                        <div className="col-md-6">
                            <h5>Telephone : </h5>
                            <input type="number" className='form-control' onChange={(e) => this.setState({ tampungTelpon : e.target.value})}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Address : </h5>  
                            <input type="text" className='form-control' onChange={(e) => this.setState({ tampungAlamat : e.target.value})}/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "35px"}}>
                        <div className="col-md-12">
                            <input type="button" value="Register" onClick={this.daftarTrip} className='btn btn-outline-secondary btn-block'/>
                        </div>    
                    </div> 
                    <p>
                        *NB: satu formulir hanya untuk satu orang
                    </p>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id : state.user.id,
        username : state.user.username
    }
}

export default connect(mapStateToProps)(DaftarTrip);