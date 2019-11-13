import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { connect } from 'react-redux'

class ManageTicket extends Component {
    state = {
        tampungAllTiket : [],
        showPencarian: false,
        tampungPencarian: '',
        tampungHasilPencarian: [],
        showPostTicket: false,
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
                    <td>  
                        <p>{val.seat} Available Seat</p>
                        <Link><input type="button" value="On Progress" className='btn btn-outline-secondary'/></Link>
                        <div className="row">
                            <div className="col-md-3">
                                <p style={{marginTop: "10px"}}>Stock: </p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress" style={{marginTop: "15px"}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${val.seat}%`}} aria-valuenow={`${val.seat}`} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>                       
                            </div>
                        </div></td>
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

    getCariTiket = () => {
        Axios.post(urlApi + 'tiket/getcaritiketadmin', { ke: this.state.tampungPencarian })
        .then((res) => {
            this.setState({ tampungHasilPencarian: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderHasilPencarian = () => {
        if(this.state.tampungHasilPencarian.length === 0){
            return (
                <tr style={{textAlign: "center"}}>
                    <td>No Results</td>
                </tr>
            )
        }
        return this.state.tampungHasilPencarian.map((val) => {
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
                    <td>  
                        <p>{val.seat} Available Seat</p>
                        <Link><input type="button" value="On Progress" className='btn btn-outline-secondary'/></Link>
                        <div className="row">
                            <div className="col-md-3">
                                <p style={{marginTop: "10px"}}>Stock: </p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress" style={{marginTop: "15px"}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${val.seat}%`}} aria-valuenow={`${val.seat}`} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>                       
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        if(this.props.id === 0) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>Managetiket</h1>
                {
                    this.state.showPencarian
                    ?
                    <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({ showPencarian: false, tampungHasilPencarian: [] })} style={{float: "right", margin: "20px"}}/>
                    :
                    <input type="button" value="Add new Ticket" className='btn btn-outline-success' style={{float: "right", margin: "20px"}} onClick={() => this.setState({ showPostTicket: true })}/>
                }
                    <input type="button" value="Search" onClick={() => this.setState({ showPencarian: true })} style={{float: "right", margin: "20px"}} className='btn btn-warning'/>
                {
                    this.state.showPencarian
                    ?
                    <div className="row" style={{width: "300px", margin: "20px"}}>
                        <div className="col-md-9">
                            <input type="text" className='form-control' onChange={(e) => this.setState({tampungPencarian: e.target.value })} placeholder="Input Tujuan"/>
                        </div>
                        <div className="col-md-3">
                            <input type="button" value="Search" className='btn btn-warning' onClick={this.getCariTiket}/>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    this.state.showPostTicket
                    ?
                    <table className='table'>
                    <thead className='thead-dark'>
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
                            <td><input type="button" value="Cancel" className='btn btn-danger btn-block' onClick={() => this.setState({ showPostTicket: false })}/></td>
                        </tr>
                    </tfoot>
                </table>
                :
                null
                }
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
                            {
                                this.state.showPencarian
                                ?
                                <>
                                {this.renderHasilPencarian()}
                                </>
                                :
                                <>
                                {this.renderAllTiket()}
                                </>
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
    }
}

export default connect(mapStateToProps)(ManageTicket);