import React, { Component } from 'react';
import './PaketWisata.css'
import {Link, Redirect} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'
import moment from 'moment'

class DestinationBox extends Component {
    state = {
        tampungTravelDetails: [],
        waktu: moment().format('ll')
    }

    componentDidMount() {
        this.getTravelDetails()
        this.renderTravelDetails()
    }

    getTravelDetails = () => {
        Axios.post(urlApi + 'travel/gettraveldetails', { id : this.props.match.params.id})
        .then((res) => {
            this.setState({ tampungTravelDetails : res.data })
            // swal ('Error', 'get success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get success', 'error')
        })
    }

    renderTravelDetails = () => {
        return this.state.tampungTravelDetails.map((val, idx) => {
            return (
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={val.gambar} style={{width: "100%",height: "250px",borderRadius: "50%"}}/>
                        </div>
                        <div className="col-md-9" style={{padding: "20px"}}>
                            <h2 style={{fontWeight: "bold"}}>{val.destinasi}</h2>
                            <h5>{val.harga} USD</h5>
                            <h5>{val.berangkat} - {val.pulang}</h5>
                            <h5>{val.maskapai}</h5>
                            <h5>{val.wisata}</h5>
                            <h5 style={{fontWeight: "bold"}}>{val.kuota} Available Seat</h5>
                            <h5 style={{color: "red"}}>Registration Limit : {val.batasBayar}</h5>
                        </div>
                        <div className="col-md-12" style={{padding: "40px"}}>
                            <p>{val.deskripsi}</p>
                        </div>
                        <div className="col md-12">
                            {
                                val.kuota < 1 || val.batasBayar === this.state.waktu
                                ?
                                <>
                                <input type="button" value="Not Available" className='btn btn-outline-danger btn-block'/>
                                </>
                                :
                                <>
                                <Link to={`/daftartrip/${val.id}`}><input type="button" value="Trip Now" className='btn btn-outline-secondary btn-block'/></Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            )
        })
    }

        render() {
            if(this.props.username === '') {
                return <Redirect to='/' />
            }
        return (
            <div>
               
                    <div style={{marginTop: "60px"}}>
                        {this.renderTravelDetails()}
                    </div>
            </div>
                    );
                }
            }

export default connect(state => {
    return {
        username : state.user.username  
    }
})(DestinationBox)