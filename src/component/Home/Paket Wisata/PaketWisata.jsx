import React, { Component } from 'react';
import './PaketWisata.css'
import {Link, Redirect} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'


class PaketWisata extends Component {
    state = {
        tampungTravel : []
    }

    componentDidMount() {
        this.getTravel()
        this.renderTravel()
    }

    getTravel = () => {
        Axios.post(urlApi + 'travel/gettravel')
        .then((res) => {
            this.setState({ tampungTravel : res.data})
            // swal ('Error', 'get success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'Delete gagal', 'error')
        })
    }

    renderTravel = () => {
        return this.state.tampungTravel.map((val, idx) => {
            return (
                <div className="col-md-3" style={{textAlign: 'center', padding: "20px"}}>
                    <h3>{val.destinasi}</h3>
                    <p>{val.harga} USD</p>
                    <p>{val.berangkat} - {val.pulang}</p>
                    <Link to={`/destinationbox/${val.id}`}><a href="">Show more >></a></Link>
                </div>
            )
        })
    }

render() {
    if(this.props.username === '') {
        return <Redirect to='/'/>
      }
return (
    <div>
        <h1 style={{marginTop: "35px", textAlign: "center"}}>Travel Package</h1>
        <div className="row" style={{marginTop: "35px"}}>
            {this.renderTravel()}
        </div>
    </div>
            );
        }
    }

export default connect(state => {
    return {
        username : state.user.username  
    }
})(PaketWisata)