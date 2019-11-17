import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class ProgressTiket extends Component {
    state = { 
        tampungProgress: []
    }

    componentDidMount() {
        this.getProgressTrip()
        this.renderProgressTiket()
    }

    getProgressTrip = () => {
        Axios.get(urlApi + 'tiket/progressTiket/' + this.props.match.params.id)
        .then((res) => {
            this.setState({ tampungProgress: res.data })
            console.log(res.data)
            swal('Ye!', 'Get bisa', 'success')
        })
        .catch((err) => {
            console.log(err)
            swal('Ups', 'Get gagal', 'error')
        })
    }

    renderProgressTiket = () => {
        return this.state.tampungProgress.map((val) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.maskapai}</td>
                    <td>{val.usiaPenumpang}</td>
                    <td>{val.alamatPenumpang}</td>
                    <td>{val.statusPenumpang}</td>
                    <td>{val.maskapai}</td>
                    <td>{val.dari} - {val.ke}</td>
                    <td>{val.berangkat} {val.time}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 style={{marginTop: "35px", textAlign: "center"}}>Ticket Progress</h1>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'> 
                        <tr style={{textAlign: 'center'}}>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Flights</th>
                            <th>Schedule</th>
                            <th>Date - Time </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProgressTiket()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProgressTiket;