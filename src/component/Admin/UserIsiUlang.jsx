import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';

class UserIsiUlang extends Component {
    state = {
        tampungIsiUlangUser: []
    }

    componentDidMount() {
        this.getIsiUlangUser()
        this.renderIsiUlangUser()
    }

    getIsiUlangUser = () => {
        Axios.post(urlApi + 'analisa/getisiulanguser')
        .then((res) => {
            this.setState({ tampungIsiUlangUser : res.data })
            // swal('Yea', 'Get BIza', 'success')
        })
        .catch((err) => {
            swal('Yeah', 'Get gagal', 'error')
        })
    }

    renderIsiUlangUser = () => {
        return this.state.tampungIsiUlangUser.map((val, idx) => {
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
                <h2 style={{marginTop: "35px", textAlign: "center"}}>User Activity</h2>
                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Username</th>
                            <th>Activity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderIsiUlangUser()}
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
  
  export default connect(mapStateToProps)(UserIsiUlang);