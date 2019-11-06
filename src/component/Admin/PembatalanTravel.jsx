import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';


class PembatalanTravel extends Component {
    state = {
        tampungPembatalanTravel: []
    }

    componentDidMount() {
        this.getPembatalanTravel()
        this.renderPembatalanTravel()
    }

    getPembatalanTravel = () => {
        Axios.post(urlApi + 'analisa/getpembatalantravel')
        .then((res) => {
            this.setState({ tampungPembatalanTravel : res.data })
        })
        .catch((err) => {
            swal('Ups', 'Get Failed', 'error')
        })
    }

    renderPembatalanTravel = () => {
        return this.state.tampungPembatalanTravel.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.username}</td>
                    <td>{val.histori}</td>
                    <td>{val.waktuHistori}</td>
                </tr>
            )
        })
    }
    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div className='container'>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Travel Cancellation</h2>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Username</th>
                            <th>Activity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPembatalanTravel()}
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
  
  export default connect(mapStateToProps)(PembatalanTravel);