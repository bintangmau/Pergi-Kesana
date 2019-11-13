import React, { Component } from 'react';
import './Food.css'
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../../helper/database'
import {connect} from 'react-redux'

class Food extends Component {
        state = {
            tampungFood: [],
            cariFoodNama: '',
            cariFoodNegara: '',
            tampungFoodNegara: [],
            tampungFoodNama: [],
            cariBerdasarkan: false,
            hasilPencarian: 2
        }

        componentDidMount() {
            this.getFood()
            this.renderFood()
        }

        getFood = () => {
            Axios.get(urlApi + 'food/getfood')
            .then((res) => {
                this.setState({ tampungFood : res.data })
                // swal('yes', 'getbisa', 'success')
            })      
            .catch((err) => {
                swal('yes', 'getgagal', 'error')
            }) 
        }

        cariFoodNama = () => {
            if(this.state.cariFoodNama === '') {
                swal('Ups', 'Input kosong', 'warning')
            } else {
                Axios.get(urlApi + 'food/carifoodnama/' + this.state.cariFoodNama)
                .then((res) => {
                    this.setState({ tampungFoodNama: res.data, hasilPencarian : 2 })
                })
                .catch((err) => {
                    swal('ups', 'get food nama gagal', 'error')
                })
            }
        }

        cariFoodNegara = () => {
            if(this.state.cariFoodNegara === '') {
                swal('Ups', 'Input kosong', 'warning')
            } else {
                Axios.get(urlApi + 'food/carifoodnegara/' + this.state.cariFoodNegara)
                .then((res) => {
                    this.setState({ tampungFoodNegara: res.data, hasilPencarian : 3 })
                    // console.log(this.state.tampungFoodNegara)
                    // swal('get bisa', 'ey', 'success')
                })
                .catch((err) => {
                    swal('ups', 'get food nama gagal', 'error')
                })
            }
        }

        renderFood = () => {
            return this.state.tampungFood.map((val, idx) => {
                return (
                    <div className="row" style={{padding: "80px"}}>
                        <div className="col-md-5">
                            <img src={urlApi + val.pathGambar} width="90%" alt=""/>
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

        renderPencarianNama = () => {
            if(this.state.tampungFoodNama.length === 0) {
                return (
                    <div>
                        <h3>No results</h3>
                    </div>
                )
            } else {
                return this.state.tampungFoodNama.map((val) => {
                    return (
                        <div className="row" style={{padding: "80px"}}>
                            <div className="col-md-5">
                                <img src={urlApi + val.pathGambar} width="90%" alt=""/>
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
        }

        renderFoodNegara = () => {
            if(this.state.tampungFoodNegara.length === 0) {
                return (
                    <div>
                        <h3>No results</h3>
                    </div>
                )
            } else {
                return this.state.tampungFoodNegara.map((val) => {
                    return (
                        <div className="row" style={{padding: "80px"}}>
                            <div className="col-md-5">
                                <img src={urlApi + val.pathGambar} width="90%" alt=""/>
                            </div>
                            <div className="col-md-7" style={{padding: "30px"}}>
                            <h2>{val.makanan}</h2>
                            <p>{val.deskripMakanan}</p>
                            <p style={{fontWeight: "bold", marginBottom: "0"}}>{val.destinasi}</p>
                            </div>
                        </div>
                    )
                })
            }
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
                <center>
                    <div className="container">
                        <div className="row" style={{margin: "40px"}}>
                            <div className="col-md-6">
                                <input type="button" value="Cari berdasarkan Nama" className='btn btn-outline-dark btn-block' onClick={() => this.setState({ cariBerdasarkan: false})}/>
                            </div>
                            <div className="col-md-6">
                                <input type="button" value="Cari berdasarkan Negara" className='btn btn-outline-dark btn-block' onClick={() => this.setState({ cariBerdasarkan: true})}/>
                            </div>
                        </div>
                        <div className="row" style={{margin: "40px"}}>
                            <div className="col-md-9">
                                {
                                    this.state.cariBerdasarkan
                                    ?
                                    <input type="text" placeholder='Nama negara' className='form-control'  onChange={(e) => this.setState({cariFoodNegara: e.target.value})}/>
                                    :
                                    <input type="text" placeholder='Nama makanan' className='form-control' onChange={(e) => this.setState({cariFoodNama: e.target.value})} value={this.state.cariFoodNama}/>
                                }
                            </div>
                            <div className="col-md-3">
                                {
                                    this.state.cariBerdasarkan
                                    ?
                                    <input type="button" value="Cari Negara" className='btn btn-warning btn-block' onClick={this.cariFoodNegara}/>
                                    :
                                    <input type="button" value="Cari Nama" className='btn btn-warning btn-block' onClick={this.cariFoodNama}/>
                                }
                            </div>
                        </div>
                    </div>
                </center>
                <div className="container" style={{marginTop: "100px"}}>
                    {
                        this.state.hasilPencarian === 2
                        ?
                        <>
                        {this.renderPencarianNama()}
                        </>
                        :
                        <>
                        {this.renderFoodNegara()}
                        </>
                    }
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