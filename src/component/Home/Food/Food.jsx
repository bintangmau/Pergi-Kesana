import React, { Component } from 'react';
import './Food.css'
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'

class Food extends Component {
        state = {
            tampungFood: []
        }

        componentDidMount() {
            this.getFood()
            this.renderFood()
        }

        getFood = () => {
            Axios.post(urlApi + 'food/getfood')
            .then((res) => {
                this.setState({ tampungFood : res.data })
                // swal('yes', 'getbisa', 'success')
            })      
            .catch((err) => {
                swal('yes', 'getgagal', 'error')
            }) 
        }

        renderFood = () => {
            return this.state.tampungFood.map((val, idx) => {
                return (
                    <div className="row" style={{padding: "80px"}}>
                        <div className="col-md-5">
                            <img src={val.pathGambar} width="90%" alt=""/>
                        </div>
                        <div className="col-md-7" style={{padding: "30px"}}>
                           <h2>{val.makanan}</h2>
                           <p>{val.deskripsi}</p>
                           <p style={{fontWeight: "bold", marginBottom: "0"}}>{val.destinasi}</p>
                        </div>
                    </div>
                )
            })
        }



    render() {
        if(this.props.username === '') {
            return <Redirect to='/' />
        }
        return (
            <div>
                <div className="layarFood">
                    <div className="contentFood">
                        <h1>delicious</h1>
                    </div>
                </div>
                <h1 style={{textAlign: "center", marginTop: "120px"}}>Ayo,</h1>
                <h4 style={{textAlign: "center"}}>Cari makan sesuai Seleramu!</h4>
                <div className="container" style={{marginTop: "100px"}}>
                    {this.renderFood()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}
export default connect(mapStateToProps)(Food);