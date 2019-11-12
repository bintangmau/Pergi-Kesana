import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class ManageTravel extends Component {
    state = {
        tampungManageTravel: [],
        waktu: moment().format('ll')
    }

    componentDidMount() {
        this.getManageTravel()
        this.renderManageTravel()
    }

    componentDidUpdate() {
        this.getManageTravel()
        this.renderManageTravel()
    }

    getManageTravel = () => {
        Axios.post(urlApi + 'managetravel/getmanagetravel')
        .then((res) => {
            this.setState({ tampungManageTravel : res.data})
            // swal ('Error', 'get travelmanage succes', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get travelmanage gagal', 'error')
        })
    }

    deleteTravel = (idParam, namaTravel) => {
        if(window.confirm('Are you Sure to Delete this Travel ?')) {
            Axios.post(urlApi + 'managetravel/deletetravel', { id : idParam})
            .then((res) => {
                Axios.post(urlApi + 'managetravel/deletepeserta', { idPaket : idParam})
                .then((res) => {
                    Axios.post(urlApi + 'history/adminhistori', {
                        histori: 'Admin telah menghapus Travel menuju ' + namaTravel,
                        idUser: 1,
                        idKategori: 7,
                        waktuHistori: this.state.waktu
                    })
                    .then((res) => {
                        swal('Success', 'Delete Success','success')
                    })
                    .catch((err) => {
                        console.log(namaTravel)
                        swal('Error', 'Delete Failed broo', 'error')
                    })
                })
            })
            .catch((err) => {
                swal('Error', 'Delete Failed', 'error')
            })
        }
    }

    renderManageTravel = () => {
        return this.state.tampungManageTravel.map((val, idx) => {
            return (
                <tr style={{textAlign: 'center'}}>
                    <td>{val.destinasi}</td>
                    <td>{val.harga}</td>
                    <td>{val.berangkat}</td>
                    <td>{val.pulang}</td>
                    <td>
                        <Link to={`/edittravel/${val.id}`}><input type="button" value="Edit" className='btn btn-dark'/></Link>
                        <input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteTravel(val.id, val.destinasi)}/>
                    </td>
                    <td>
                        <p>{val.kuota} Available Seat</p>
                        <Link to={`/progresstrip/${val.id}`}><input type="button" value="On Progress" className='btn btn-outline-secondary'/></Link>
                        <div className="row">
                            <div className="col-md-3">
                                <p style={{marginTop: "10px"}}>Ticket Stock: </p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress" style={{marginTop: "15px"}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${val.kuota}%`}} aria-valuenow={`${val.kuota}`} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>                       
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Manage Travel</h2>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Destinasi</th>
                            <th>Harga</th>
                            <th>Berangkat</th>
                            <th>Pulang</th>
                            <th>Options</th>
                            <th>On Trip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderManageTravel()}
                    </tbody>
                    <tfoot>
                        <tr style={{textAlign: "center"}}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><Link to='/posttravel'><input type="button" value="Add new Travel Package" className='btn btn-success'/></Link></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      username : state.user.username
    } 
  }
  
  export default connect(mapStateToProps)(ManageTravel);