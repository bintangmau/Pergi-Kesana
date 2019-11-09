import React, { Component } from 'react';
import './PaketWisata.css'
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import Countdown from 'react-countdown-now'

class DaftarTrip extends Component {
    state = {
        tampungDaftarTrip: [],
        tampungNama: '',
        tampungUsia: 0,
        tampungPaspor: '',
        tampungAlamat: '',
        tampungTelpon: 0,
        tampungNamaTravel: '',
        waktu : new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate(),
        timeout: new Date().getFullYear() + '-' + (new Date().getMonth() + 1)  + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        pindahMyTrip: false
    }

    componentDidMount() {
        this.getNamaTravel()
    }

    daftarTrip = () => {
        // const renderer = ({ hours, minutes, seconds, completed }) => {
        //     if (completed) {
        //       // Render a completed state
        //       return <Redirect to='/' />;
        //     } else {
        //       // Render a countdown
        //       return <span>{hours}:{minutes}:{seconds}</span>;
        //     }
        //   };

        //   export const timeOut = ReactDOM.render(
        //     <Countdown
        //       date={Date.now() + 5000}
        //       renderer={renderer}
        //     />,
        //     document.getElementById('root')
        //   );
        
        Axios.post(urlApi + 'travel/daftartrip', { namaPeserta : this.state.tampungNama, usiaPeserta : this.state.tampungUsia, idUser : this.props.id,
                                                   idPaket : this.props.match.params.id, status : 'Belum Bayar', noPaspor: this.state.tampungPaspor, alamat: this.state.tampungAlamat,
                                                    noTelp: this.state.tampungTelpon })
                                                
            .then((res) => {
                Axios.post(urlApi + 'travel/daftartriphistory', { histori : this.state.tampungNama + ' Telah medaftar Travel menuju ' + this.state.tampungNamaTravel, 
                idUser : this.props.id, idKategori : 2, waktuHistori : this.state.waktu })
                .then(() => {
                    this.setState({ pindahMyTrip: true })
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
        if(this.state.pindahMyTrip === true) {
            return <Redirect to='/mytrip' />
        }
        if(this.props.username === '') {
            return <Redirect to='/' />
        }
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
                            <p style={{color: "red"}}>Harap masukkan alamat dengan benar, kami akan mengirim beberapa berkas menuju alamat anda</p>  
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