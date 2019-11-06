import React, { Component } from 'react';
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

class PaymentAll extends Component {
    state = {
        tampilMethod: true,
        tampungHargaTotal: 0
    }

    componentDidMount(){
        this.getHargaTotal()
    }

    getHargaTotal = () => {
        Axios.post(urlApi + 'travel/gethargatotal', { idUser : this.props.id})
        .then((res) => {
            this.setState({ tampungHargaTotal : res.data[0].totalHarga})
            // swal('Yeah', 'GEt bisaharga', 'success')
            // console.log(this.state.tampungHargaTotal)
        })
        .catch((err) => {
            swal('Yeah', 'GEt gagal di hargatotal', 'error')
        })
    }

    render() {
        if(this.props.id === 0) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1 style={{textAlign: "center", marginTop: "35px"}}>Payment All</h1>
                <div className="container" style={{marginTop: "25px",padding: "20px"}}>
                    <h3 style={{textAlign: "center"}}>Payment Method</h3>
                    <div className="row">
                        <div style={{backgroundColor: "black"}} className="col-md-6">
                            <button className='btn btn-outline-secondary btn-block' onClick={() => this.setState({ tampilMethod : true })}>
                                <h5 style={{textAlign: "center", padding: "20px", color: "white"}}>ATM Transfer</h5>
                                <p style={{color: "white", fontWeight: "bold"}}>({this.state.tampungHargaTotal} USD)</p>
                            </button>
                        </div>
                        <div style={{backgroundColor: "green"}} className="col-md-6">
                        <button className='btn btn-outline-success btn-block' onClick={() => this.setState({ tampilMethod : false })}>
                                <h5 style={{textAlign: "center", padding: "20px", color: "white"}}>Kesana-PAY</h5>
                                <p style={{color: "white", fontWeight: "bold"}}>
                                    <span>Discount 20%</span>({this.state.tampungHargaTotal * 80/100} USD)
                                </p>
                            </button>
                        </div>
                    </div>
                    {
                        this.state.tampilMethod === true 
                        ?<>
                        <div>
                            <h1>ATM</h1>
                        </div>
                        </>
                        :
                        <>
                        <div>
                            <h1>Kesana PAY</h1>
                        </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id
    }
}

export default connect(mapStateToProps)(PaymentAll);