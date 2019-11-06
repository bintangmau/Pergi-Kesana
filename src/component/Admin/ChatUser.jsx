import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';
import moment from 'moment';

class ChatUser extends Component {
    state = {
        tampungChat: [],
        tampungJawaban : '',
        waktu: moment().format('LL'),
        gabisaJawabLagi: false
    }

    componentDidMount() {
        this.getChat()
        this.renderChat()
    }

    getChat = () => {
        Axios.post(urlApi + 'tanyajawab/getchatuser', { idUser : this.props.match.params.id})
        .then((res) => {
            this.setState({ tampungChat : res.data })
            // swal('yes', 'getbissa', 'success')
        })
        .catch((err) =>{
            swal('yes', 'getgabissa', 'error')
        })
    }

    renderChat = () => {
         return this.state.tampungChat.map((val, idx) => {
             return (
                <tr>
                    <td>{val.soal}</td>
                    <td>{val.waktu}</td>
                    <td>              
                        <input type="text" className='form-control' onChange={(e) => this.setState({ tampungJawaban : e.target.value})}/>
                        <input type="button" value="Send" className='btn btn-success btn-block' onClick={() => this.jawabUser(val.idsoal)}/>
                    </td>
                </tr>
             )
         })
    }

    jawabUser = (idsual) => {
        Axios.post(urlApi + 'tanyajawab/jawabuser', { jawaban: this.state.tampungJawaban, waktu: this.state.waktu, idSoal : idsual})
        .then((res) => {
            swal('Thanks', 'Wis gelem jawab', 'success')
        })
        .catch((err) => {
            swal('Oops', 'Something is Wrong', 'error')
        })
    }

    render() {  
        if(this.props.username === '') {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1 style={{textAlign: "center"}}>chatuser</h1>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Questions</th>
                            <th>Time</th>
                            <th>Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderChat()}
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

export default connect(mapStateToProps)(ChatUser);