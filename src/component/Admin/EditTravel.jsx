import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class EditTravel extends Component {
    state = {
        tampungEditTravel: [],
        destinasiBaru: '',
        hargaBaru: 0,
        maskapaiBaru: '',
        hotelBaru: '',
        berangkatBaru: '',
        pulangBaru: '',
        kuotaBaru: 0,
        wisataBaru: '',
        deskripsiBaru: '',
        gambarBaru: '',
        batasBayarBaru: ''
    }

    componentDidMount() {
        this.getEditTravel()
        this.renderEdit()
        this.renderEdit2()
        this.renderEdit3()
    }

    getEditTravel = () => {
        Axios.post(urlApi + 'managetravel/getedittravel', { id: this.props.match.params.id})
        .then((res) => {
            // swal ('Error', 'get edittravel succes', 'success')
            this.setState({ tampungEditTravel : res.data})
        })
        .catch((err) => {
            swal ('Error', 'get travelmanage failed', 'error')
        })
    }

    editDestinasi = () => {
        Axios.post(urlApi + 'managetravel/editdestinasi', { destinasiNew : this.state.destinasiBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editHarga = () => {
        Axios.post(urlApi + 'managetravel/editharga', { hargaNew : this.state.hargaBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editMaskapai = () => {
        Axios.post(urlApi + 'managetravel/editmaskapai', { maskapaiNew : this.state.maskapaiBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editHotel = () => {
        Axios.post(urlApi + 'managetravel/edithotel', { hotelNew : this.state.hotelBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editBerangkat = () => {
        Axios.post(urlApi + 'managetravel/editberangkat', { berangkatNew : this.state.berangkatBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editPulang = () => {
        Axios.post(urlApi + 'managetravel/editpulang', { pulangNew : this.state.pulangBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editKuota = () => {
        Axios.post(urlApi + 'managetravel/editkuota', { kuotaNew : this.state.kuotaBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editWisata = () => {
        Axios.post(urlApi + 'managetravel/editwisata', { wisataNew : this.state.wisataBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editDeskripsi = () => {
        Axios.post(urlApi + 'managetravel/editdeskripsi', { deskripsiNew : this.state.deskripsiBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editGambar = () => {
        const bodyFormData = new FormData()

        var options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        bodyFormData.append('image', this.state.gambarBaru)


        Axios.post(urlApi + 'managetravel/editgambar', { gambarNew : this.state.gambarBaru, id : this.props.match.params.id}, options)
        .then(() => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch(() => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }

    editBatasBayar = () => {
        Axios.post(urlApi + 'managetravel/editbatasbayar', { batasBayarNew : this.state.batasBayarBaru, id : this.props.match.params.id})
        .then((res) => {
            swal ('Success', 'Edit success', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get edittravel succes', 'error')
            // console.log(this.state.destinasiBaru)
        })
    }


    renderEdit = () => {
        return this.state.tampungEditTravel.map((val, idx) => {
            return (
                        <tr>
                            <td>
                                <input type="text" className='form-control' placeholder={val.destinasi} onChange={(e) => this.setState({ destinasiBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editDestinasi}/>
                            </td>
                            <td>
                                <input type="number" className='form-control' placeholder={val.harga} onChange={(e) => this.setState({ hargaBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editHarga}/>
                            </td>
                            <td>
                                <input type="text" className='form-control' placeholder={val.maskapai} onChange={(e) => this.setState({ maskapaiBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editMaskapai}/>
                            </td>
                            <td>
                                <input type="text" className='form-control' placeholder={val.hotel} onChange={(e) => this.setState({ hotelBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editHotel}/>
                            </td>
                        </tr>
            )
        })
    }

    renderEdit2 = () => {
        return this.state.tampungEditTravel.map((val, idx) => {
            return (
                <tr>
                            <td>
                                <input type="text" className='form-control' placeholder={val.berangkat} onChange={(e) => this.setState({ berangkatBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editBerangkat}/>
                            </td>
                            <td>
                                <input type="text" className='form-control' placeholder={val.pulang} onChange={(e) => this.setState({ pulangBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editPulang}/>
                            </td>
                            <td>
                                <input type="number" className='form-control' placeholder={val.kuota} onChange={(e) => this.setState({ kuotaBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editKuota}/>
                            </td>
                            <td>
                                <input type="text" className='form-control' placeholder={val.wisata} onChange={(e) => this.setState({ wisataBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editWisata}/>
                            </td>
                        </tr>
            )
        })
    }

    renderEdit3 = () => {
        return this.state.tampungEditTravel.map((val, idx) => {
            return (
                        <tr>
                            <td>
                                <input type="text" className='form-control' placeholder={val.deskripsi} onChange={(e) => this.setState({ deskripsiBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editDeskripsi}/>
                            </td>
                            <td>
                                {/* <input type="text" className='form-control' placeholder={val.gambar} onChange={(e) => this.setState({ gambarBaru : e.target.value})}/> */}
                                <input type="file" className='form-control'onChange={this.imagePost}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editGambar}/>
                            </td>
                            <td>
                            <input type="text" className='form-control' placeholder={val.batasBayar} onChange={(e) => this.setState({ batasBayarBaru : e.target.value})}/>
                                <input type="button" value="Edit" className='btn btn-success btn-block' onClick={this.editBatasBayar}/>
                            </td>
                        </tr>
            )
        })
    }

    imagePost = (e) => {
        // console.log(e.target.files)
        if(e.target.files[0]) {
            this.setState({ gambarBaru: e.target.files })
        } else {
            this.setState({ gambarBaru: null })
        }
    }
    
    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div>
                <h1 style={{marginTop: "35px", textAlign: "center"}}>Edit Travel</h1>
                <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Destinasi</th>
                                <th>Harga</th>
                                <th>Maskapai</th>
                                <th>Hotel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderEdit()}
                        </tbody>
                </table>
                <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Berangkat</th>
                                <th>Pulang</th>
                                <th>Kuota</th>
                                <th>Wisata</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderEdit2()}
                        </tbody>
                </table>
                <table className='table' style={{marginTop: "35px"}}>
                        <thead className='thead-dark'>
                            <tr style={{textAlign: "center"}}>
                                <th>Deskripsi</th>
                                <th>Path Gambar</th>
                                <th>Batas Bayar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderEdit3()}
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
  
  export default connect(mapStateToProps)(EditTravel);