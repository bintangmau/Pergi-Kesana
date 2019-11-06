import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Pemasukan extends Component {
    state = {
        tampungSemuaPemasukan: []
    }

    componentDidMount() {
        this.getPemasukanAdmin()
        this.renderPemasukanAdmin()
        this.renderPemasukanTotal()
    }

    getPemasukanAdmin = () => {
        Axios.get(urlApi + 'history/pemasukanadmin')
        .then((res) => {
            this.setState({ tampungSemuaPemasukan : res.data })
        })
        .catch((err) => {
            swal('Ups', 'Get gagal', 'error')
        })
    }

    renderPemasukanAdmin = () => {
        return this.state.tampungSemuaPemasukan.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.saldoAdmin} USD</td>
                    <td>{val.username}</td>
                    <td>{val.waktuPemasukan}</td>
                </tr>
            )
        })
    }

    renderPemasukanTotal = () => {
        var totalIncome = 0
        this.state.tampungSemuaPemasukan.map((val, idx) => {
            totalIncome += val.saldoAdmin
        }) 
        return totalIncome
    }

    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div className='container'>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Pemasukan</h2>
                <center>
                    <input type="button" value={`Total Income: ${this.renderPemasukanTotal()} USD`} className='btn btn-outline-success'/>
                </center>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Income</th>
                            <th>Username</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPemasukanAdmin()}
                    </tbody>
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
  
export default connect(mapStateToProps)(Pemasukan);
