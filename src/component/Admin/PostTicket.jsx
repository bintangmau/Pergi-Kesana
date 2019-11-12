import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { connect } from 'react-redux'

class PostTicket extends Component {
    state = {
        tampungMaskapai: '',
        tampungCode: '',
        tampungDari: '',
        tampungKe: '',
        tampungDate: '',
        tampungTime: '',
        tampungDurasi: 0,
        tampungSeat: 0,
        tampungPrice: 0
    }

    PostTiket = () => {
        Axios.post(urlApi + 'tiket/posttiket', {
            maskapai: this.state.tampungMaskapai,
            kodepesawat: this.state.tampungCode,
            dari: this.state.tampungDari,
            ke: this.state.tampungKe,
            berangkat: this.state.tampungDate,
            durasi: this.state.tampungDurasi,
            seat: this.state.tampungSeat,
            time: this.state.tampungTime,
            price: this.state.tampungPrice
        })
        .then(() => {
            swal('Congrats!', 'Post Success', 'success')
        })
        .catch(() => {
            swal('Ups!', 'Post Failed', 'error')
        })
    }

    render() {
        return (
            <div className='container'>
                <h1 style={{marginTop: "35px", textAlign: "center"}}>Postticket</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Flights</th>
                            <th>Code</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Seat</th>
                            <th>Duration</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungMaskapai: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungCode: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDari: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungKe: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDate: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungTime: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungSeat: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDurasi: e.target.value })}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungPrice: e.target.value })}/></td> 
                        </tr>
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
                            <td><input type="button" value="Add" className='btn btn-success btn-block' onClick={this.PostTiket}/></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default PostTicket;