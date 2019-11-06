import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';

class TransaksiBerhasil extends Component {
    state = {
        tampungTransaksiBerhasil: []
    }

    componentDidMount() {
        this.getTransaksiBerhasilDetails()
        this.renderTransaksiBerhasil()
    }

    getTransaksiBerhasilDetails = () => {
        Axios.get(urlApi + 'analisa/transaksiberhasildetails')
        .then((res) => {
            this.setState({ tampungTransaksiBerhasil : res.data })
        })
        .catch((err) => {
            swal('Yeh', 'Get transaksi Travel', 'error')
        })
    }

    renderTransaksiBerhasil = () => {
        return this.state.tampungTransaksiBerhasil.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.histori}</td>
                    <td>{val.idUser}</td>
                    <td>{val.waktuHistori}</td>
                </tr>
            )
        })
    }
    render() {
        if(this.props.username === ''){
            return <Redirect to='/'/>
        }
        return (
            <div className='container'>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Payment Success</h2>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>History</th>
                            <th>User ID</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransaksiBerhasil()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps)(TransaksiBerhasil);