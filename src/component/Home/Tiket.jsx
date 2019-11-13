import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import swal from 'sweetalert'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

class Tiket extends Component {
    state = {
        tampungAllTiket: [],
        tampungKe: '',
        selectValue: '',
        tampungFilterTiket: [],
        tampilPencarian: false
    }

    componentDidMount() {
        this.getAllTiket()
        this.renderKe()
        this.renderAllTiket()
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

    renderKe = () => {
        return this.state.tampungAllTiket.map((val) => {
            return (
                
                    <MDBDropdownItem>{val.ke}</MDBDropdownItem>
               
            )
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
                        <Link to={`/tiketdetails/${val.id}`}>
                            <input type="button" value="Book" className='btn btn-success'/>
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    dropdownValue = (e) => {
        this.setState({ selectValue : e.target.value })
    }

    cariTiket = () => {
        if(this.state.tampungKe === '') {
            swal('Ups!', 'Anda belum mengisi!', 'warning')
        } else {
            Axios.post(urlApi + 'tiket/caritiket', { ke : this.state.tampungKe })
            .then((res) => {
                this.setState({ tampungFilterTiket: res.data, tampilPencarian: true })
            })
            .catch((err) => {
                console.log(err)
                swal('Ups!', 'Ga dapet', 'error')
            })
        }
    }

    renderFilterTiket = () => {
        if(this.state.tampungFilterTiket.length < 1) {
            return (
                <tr>
                    <td>No results</td>
                </tr>
            )
        } 
        return this.state.tampungFilterTiket.map((val, idx) => {
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
                            <Link to={`/tiketdetails/${val.id}`}>
                                <input type="button" value="Book" className='btn btn-success'/>
                            </Link>
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
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Booking Ticket</h2>
                <div className="container-fluid" style={{marginTop: "35px"}}>
                    <div>
                            Mau Kemana ?
                            <select value={this.state.selectValue}></select>
                        <MDBDropdown>
                            <MDBDropdownToggle caret color="primary">
                               Booking Ticket
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                            {this.renderKe()}
                           </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                    <div style={{margin: "20px"}}>
                        <div className="row">
                            <div className="dol-md-9">
                                <input type="text" className='form-control' placeholder="Mau Kemana ?" onChange={(e) => this.setState({ tampungKe: e.target.value })}/>
                            </div>
                            <div className="col-md-3">
                                <input type="button" value="Cari" className='btn btn-success' onClick={this.cariTiket}/>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.tampilPencarian
                        ?
                        <div style={{ marginBottom: "20px"}}>
                            <input type="button" value="Show All" className='btn btn-success' onClick={() => this.setState({tampilPencarian : false})}/>
                        </div>
                        :
                        null
                    }
                      
                    <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign:"center"}}>
                                <th>Flights</th>
                                <th>Code</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Seat</th>
                                <th>Price</th>
                                <th>Book</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tampilPencarian
                                ?
                                <>    
                                {this.renderFilterTiket()}
                                </>
                                :
                                <>
                                {this.renderAllTiket()}
                                </>
                            }
                        </tbody>
                    </table>
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
    }
}

export default connect(mapStateToProps)(Tiket);