import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { connect } from 'react-redux'

class ManageTicket extends Component {
    state = {
        tampungAllTiket : []
    }

    componentDidMount() {
        this.getAllTiket()
    }

    getAllTiket = () => {
        Axios.get(urlApi + 'tiket/getalltiket')
        .then((res) => {
            this.setState({ tampungAllTiket : res.data })
        })
        .catch((err) => {
            console.log(err)
            swal('Ups!', 'Get All ticket Failed', 'error')
        })
    }

    renderAllTiket = () => {
        return this.state.tampungAllTiket.map((val) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.maskapai}</td>
                    <td>{val.kodepesawat}</td>
                    <td>{val.dari}</td>
                    <td>{val.ke}</td>
                    <td>{val.berangkat}</td>
                    <td>{val.time}</td>
                    <td>{val.seat}</td>
                    <td>{val.price}</td>
                    <td>
                        <Link to={`/edittiket/${val.id}`}><input type="button" value="Edit" className='btn btn-success'/></Link>
                        <input type="button" value="Delete" onClick={() => this.deleteTiket(val.id)} className='btn btn-danger'/>
                    </td>
                    <td>Progress</td>
                </tr>
            )
        })
    }


    deleteTiket = (idTiket) => {
        if(window.confirm('Are you Sure to Delete this Travel ?')) {
            Axios.post(urlApi + 'tiket/deletetiket', { id: idTiket})
            .then(() => {
                this.getAllTiket()
                swal('Ok!', 'Delete Success', 'success')
            })
            .catch((err) => {
                console.log(err)
                swal('Ups!', 'Delete Failed')
            })
        }
    }


    render() {
        return (
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>Managetiket</h1>
                <Link to='/posttiket'>
                    <input type="button" value="Add new Ticket" className='btn btn-outline-success' style={{float: "right", margin: "20px"}}/>
                </Link>
                <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Flights</th>
                                <th>Code</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Seat</th>
                                <th>Manage</th>
                                <th></th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAllTiket()}
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default ManageTicket;