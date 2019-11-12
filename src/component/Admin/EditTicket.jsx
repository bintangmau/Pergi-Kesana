import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { connect } from 'react-redux'

class EditTicket extends Component {
    state = {
        tampungMaskapai: '',
        tampungKode: '',
        tampungDari: '',
        tampungKe: '',
        tampungBerangkat: '',
        tampungDurasi: 0,
        tampungSeat: 0,
        tampungTime: ''
    }

    editMaskapai = () => {
        Axios.post(urlApi + 'tiket/editmaskapai', { maskapaiNew : this.state.tampungMaskapai, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }


    editKode = () => {
        Axios.post(urlApi + 'tiket/editcode', { kodeNew : this.state.tampungKode, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }

    editDari = () => {
        Axios.post(urlApi + 'tiket/editdari', { dariNew : this.state.tampungDari, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }


    editTo = () => {
        Axios.post(urlApi + 'tiket/editto', { keNew : this.state.tampungKe, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }

    editBerangkat = () => {
        Axios.post(urlApi + 'tiket/editberangkat', { berangkatNew : this.state.tampungBerangkat, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }

    editDurasi = () => {
        Axios.post(urlApi + 'tiket/editdurasi', { durasiNew : this.state.tampungDurasi, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }

    editSeat = () => {
        Axios.post(urlApi + 'tiket/editseat', { seatNew : this.state.tampungSeat, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            swal('Ups', 'Edit Failed', 'error')
        })
    }

    editTime = () => {
        Axios.post(urlApi + 'tiket/edittime', { timeNew : this.state.tampungTime, id: this.props.match.params.id })
        .then(() => {
            swal('Ye!', 'Edit Success', 'success')
        })
        .catch(() => {
            console.log(this.state.tampungTime)
            swal('Ups', 'Edit Failed', 'error')
        })
    }


    render() {
        return (
            <div>
                <h1>Edit Ticket</h1>
                <table className='table'>
                    <thead>
                        <tr style={{textAlign: "center"}}>
                            <th>Maskapai</th>
                            <th>Kode</th>
                            <th>Dari</th>
                            <th>Ke</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: "center"}}>
                            <td>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ tampungMaskapai: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editMaskapai} /> 
                            </td>
                            <td>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ tampungKode: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editKode} /> 
                            </td>
                            <td>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ tampungDari: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editDari}/> 
                            </td>
                            <td>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ tampungKe: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editTo}/> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className='table'>
                    <thead>
                        <tr style={{textAlign: "center"}}>
                            <th>Berangkat</th>
                            <th>Durasi</th>
                            <th>Seat</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: "center"}}>
                            <td>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ tampungBerangkat: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editBerangkat}/> 
                            </td>
                            <td>
                                <input type="text" className='form-control'onChange={(e) => this.setState({ tampungDurasi: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editDurasi}/> 
                            </td>
                            <td>
                                <input type="text" className='form-control'onChange={(e) => this.setState({ tampungSeat: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editSeat}/> 
                            </td>
                            <td>
                                <input type="text" className='form-control' onChange={(e) => this.setState({ tampungTime: e.target.value })}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editTime}/> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EditTicket;