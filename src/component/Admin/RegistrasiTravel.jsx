import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';

class RegistrasiTravel extends Component {
    state = {
        tampungRegistrasiTravel: []
    }

    componentDidMount() {
        this.getRegistrasiTravel()
        this.renderRegistrasiTravel()
    }

    getRegistrasiTravel = () => {
        Axios.post(urlApi + 'analisa/gettotalpendaftarantravel')
        .then((res) => {
            this.setState({ tampungRegistrasiTravel : res.data })
        })
        .catch((err) => {
            swal('Ups', 'Ada yg salah bro', 'error')
        })
    }

    renderRegistrasiTravel = () => {
        return this.state.tampungRegistrasiTravel.map((val, idx) => {
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
                <h2 style={{textAlign: "center", marginTop: "35px"}}>RegistrasiTravel</h2>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Username</th>
                            <th>Activity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRegistrasiTravel()}
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
  
  export default connect(mapStateToProps)(RegistrasiTravel);