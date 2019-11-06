import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class ProgressTrip extends Component {
    state = {
        tampungPeserta: []
    }

    componentDidMount() {
        this.getPeserta()
        this.renderPeserta()
    }

    getPeserta = () => {
        Axios.post(urlApi + 'managetravel/getpeserta', { idPaket : this.props.match.params.id})
        .then((res) => {
            this.setState({ tampungPeserta : res.data })
            // swal('Success', 'Get iso', 'success')
        })
        .catch((err) => {
            swal('Error', 'Get gagal', 'error')
        })
    }

    // getNamaUser = () => {
    //     Axios.post(urlApi + 'managetravel/getnamauser' { })
    // }

    renderPeserta = () => {
        return this.state.tampungPeserta.map((val, idx) => {
            return(
                <tr style={{textAlign: "center"}}>
                    <td>{val.namaPeserta}</td>
                    <td>{val.usiaPeserta}</td>
                    <td>{val.idUser}</td>
                    <td>{val.status}</td>
                    <td>{val.noPaspor}</td>
                    <td>{val.noTelp}</td>
                    <td>{val.alamat}</td>
                </tr>
            )
        })
    }

    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return(
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>Progress</h1>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Name</th>
                            <th>Age</th>
                            <th>ID User</th>
                            <th>Status</th>
                            <th>Paspor</th>
                            <th>Telp</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPeserta()}
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
  
  export default connect(mapStateToProps)(ProgressTrip);