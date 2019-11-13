import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database';
import swal from 'sweetalert';

class AnswerQuestions extends Component {
    state = {
        tampungSoal: []
    }

    componentDidMount() {
        this.getSoal()
        this.renderSoal()
    }

    getSoal = () => {
        Axios.post(urlApi + 'tanyajawab/getsoal')
        .then((res) => {
            this.setState({ tampungSoal : res.data })
            // swal('Suces', 'getbisa', 'success')
        })
        .catch((err) => {
            swal('eror', 'gagalget', 'error')
        })
    }

    renderSoal = () => {
        return this.state.tampungSoal.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.username}</td>
                    <td>
                        <Link to={`/chatuser/${val.id}`}>
                            <input type="button" value="Jawab" className='btn btn-outline-secondary'/>
                        </Link>
                    </td>
                </tr>
            )
        })
    }


    render() {
        if(this.props.username === '') {
            return <Redirect to='/' />
        }
        return (
            <div>
                <div className="container">
                    <h1 style={{textAlign: "center", marginTop: "35px"}}>Anser</h1>
                    <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Username</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderSoal()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps)(AnswerQuestions);