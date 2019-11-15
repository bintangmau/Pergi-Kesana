import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class ProgressTiket extends Component {
    render() {
        return (
            <div>
                <h1>TIketprgrres</h1>
            </div>
        )
    }
}

export default ProgressTiket;