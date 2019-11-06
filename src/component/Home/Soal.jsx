import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class Soal extends Component {
    state = {
        soal: '',
        waktu: new Date().getFullYear() + '/' + (new Date().getMonth() + 1)  + '/' + new Date().getDate(),
        tampungJawabanAdmin: []
    }
    
    componentDidMount() {
        this.getJawabanAdmin()
        this.renderJawabanAdmin()
    }

    tanyaAdmin = () => {
        Axios.post(urlApi + 'tanyajawab/tanyaadmin', { soal : this.state.soal, idUser : this.props.id, waktu : this.state.waktu })
        .then((res) => {
            swal('Asked', 'Wait answer from Admin', 'success')
        })
        .catch((err) => {
            swal('Ups!', 'Failed', 'error')
        })
    }

    getJawabanAdmin = () => {
        Axios.post(urlApi + 'tanyajawab/getjawabanadmin', { idUser : this.props.id })
        .then((res) => {
            this.setState({ tampungJawabanAdmin : res.data })
            // swal('Suces', 'GEt jawab admin', 'success')
        })
        .catch((err) => {
            swal('Suces', 'GEt jawab admin', 'error')
        })
    }

    renderJawabanAdmin = () => {
        return this.state.tampungJawabanAdmin.map((val, idx) => {
            return (
                <div style={{padding: "10px"}}>
                    <p><span style={{fontWeight: "bold"}}>You: </span>{val.soal}</p>
                    <p style={{float: "right"}}><span style={{fontWeight: "bold"}}>Admin: </span>{val.jawaban}</p>
                </div>
            )
        })
    }


    render() {
        if(this.props.id === 0) {
            return <Redirect to='/'/>
        }
        return (
            <div className='container'>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Ask to Admin</h2>
                <div style={{padding: "20px"}}>
                    {this.renderJawabanAdmin()}
                </div>
                <div className="row" style={{marginTop: "35px"}}>
                    <div className="col-md-6">
                        <input type="text" className='form-control' onChange={(e) => this.setState({ soal : e.target.value})}/>
                    </div>
                    <div className="col-md-6">
                        <input type="button" value="Ask" className='btn btn-success btn-block' onClick={this.tanyaAdmin}/>
                    </div>
                </div>
                <p>*NB : Takok sing genah ae</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id
    }
}
export default connect(mapStateToProps)(Soal)