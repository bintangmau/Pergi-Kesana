import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class ManageTravel extends Component {
    state = {
        tampungManageTravel: [],
        waktu: moment().format('ll'),
        tampilPencarian: false,
        inputPencarian: '',
        tampungHasilCari: [],
        showPostTravel: false,
        tampungDestinasi: '',
        tampungHarga: 0,
        tampungMaskapai: '',
        tampungHotel: '',
        tampungBerangkat: '',
        tampungPulang: '',
        tampungKuota: 0,
        tampungWisata: '',
        tampungDeskripsi: '',
        tampungGambar: '',
        tampungBatasBayar: '',
        loadingPost: false
    }

    componentDidMount() {
        this.getManageTravel()
        this.renderManageTravel()
    }

    componentDidUpdate() {
        this.getManageTravel()
        this.renderManageTravel()
    }

    getManageTravel = () => {
        Axios.post(urlApi + 'managetravel/getmanagetravel')
        .then((res) => {
            this.setState({ tampungManageTravel : res.data})
            // swal ('Error', 'get travelmanage succes', 'success')
        })
        .catch((err) => {
            swal ('Error', 'get travelmanage gagal', 'error')
        })
    }

    deleteTravel = (idParam, namaTravel) => {
        if(window.confirm('Are you Sure to Delete this Travel ?')) {
            Axios.post(urlApi + 'managetravel/deletetravel', { id : idParam})
            .then((res) => {
                Axios.post(urlApi + 'managetravel/deletepeserta', { idPaket : idParam})
                .then((res) => {
                    Axios.post(urlApi + 'history/adminhistori', {
                        histori: 'Admin telah menghapus Travel menuju ' + namaTravel,
                        idUser: 1,
                        idKategori: 7,
                        waktuHistori: this.state.waktu
                    })
                    .then((res) => {
                        swal('Success', 'Delete Success','success')
                    })
                    .catch((err) => {
                        console.log(namaTravel)
                        swal('Error', 'Delete Failed broo', 'error')
                    })
                })
            })
            .catch((err) => {
                swal('Error', 'Delete Failed', 'error')
            })
        }
    }

    getPencarianTravel = () => {
        if(this.state.inputPencarian === '') {
            swal('Ups!', 'Input dulu bro', 'warning')
        } else {
            Axios.get(urlApi + 'managetravel/gettravelfilter/' + this.state.inputPencarian)
            .then((res) => {
                this.setState({ tampungHasilCari : res.data })
                if(this.state.tampungHasilCari.length === 0) {
                    swal('Ups!', 'No Results', 'warning')
                } 
            })
            .catch((err) => {
                console.log(err)
                swal('Ups', 'Get Gagal', 'error')
            })
        }
    }

    renderManageTravel = () => {
        return this.state.tampungManageTravel.map((val, idx) => {
            return (
                <tr style={{textAlign: 'center'}}>
                    <td>{val.destinasi}</td>
                    <td>{val.harga}</td>
                    <td>{val.berangkat}</td>
                    <td>{val.pulang}</td>
                    <td>
                        <Link to={`/edittravel/${val.id}`}><input type="button" value="Edit" className='btn btn-dark'/></Link>
                        <input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteTravel(val.id, val.destinasi)}/>
                    </td>
                    <td>
                        <p>{val.kuota} Available Seat</p>
                        <Link to={`/progresstrip/${val.id}`}><input type="button" value="On Progress" className='btn btn-outline-secondary'/></Link>
                        <div className="row">
                            <div className="col-md-3">
                                <p style={{marginTop: "10px"}}>Ticket Stock: </p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress" style={{marginTop: "15px"}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${val.kuota}%`}} aria-valuenow={`${val.kuota}`} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>                       
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    renderHasilCari = () => {
       return this.state.tampungHasilCari.map((val) => {
            return (
            <tr style={{textAlign: 'center'}}>
                <td>{val.destinasi}</td>
                <td>{val.harga}</td>
                <td>{val.berangkat}</td>
                <td>{val.pulang}</td>
                <td>
                    <Link to={`/edittravel/${val.id}`}><input type="button" value="Edit" className='btn btn-dark'/></Link>
                    <input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteTravel(val.id, val.destinasi)}/>
                </td>
                <td>
                    <p>{val.kuota} Available Seat</p>
                    <Link to={`/progresstrip/${val.id}`}><input type="button" value="On Progress" className='btn btn-outline-secondary'/></Link>
                    <div className="row">
                        <div className="col-md-3">
                            <p style={{marginTop: "10px"}}>Ticket Stock: </p>
                        </div>
                        <div className="col-md-8">
                            <div className="progress" style={{marginTop: "15px"}}>
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: `${val.kuota}%`}} aria-valuenow={`${val.kuota}`} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                       
                        </div>
                    </div>
                </td>
            </tr>
            )
        })
    }

    onBtnPostTravel = () => {
        let bodyFormData = new FormData()
        // console.log(this.state.tampungGambar, 'Iki cok')
        // bodyFormData.append("destinasi" , this.state.tampungDestinasi)
        // bodyFormData.append("harga" , this.state.tampungHarga)
        // bodyFormData.append("maskapai" , this.state.tampungMaskapai)
        // bodyFormData.append("hotel" , this.state.tampungHotel)
        // bodyFormData.append("berangkat" , this.state.tampungBerangkat)
        // bodyFormData.append("pulang" , this.state.tampungPulang)
        // bodyFormData.append("kuota" , this.state.tampungKuota)
        // bodyFormData.append("wisata" , this.state.tampungWisata)
        // bodyFormData.append("deskripsi" , this.state.tampungDeskripsi)
        // bodyFormData.append("posting" , this.state.tampungGambar)
        // bodyFormData.append("batasBayar" , this.state.batasBayar)


        var options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        var data = {
            destinasi : this.state.tampungDestinasi,
            harga : this.state.tampungHarga,
            maskapai  : this.state.tampungMaskapai,
            hotel : this.state.tampungHotel,
            berangkat : this.state.tampungBerangkat,
            pulang : this.state.tampungPulang,
            kuota : this.state.tampungKuota,
            wisata : this.state.tampungWisata,
            deskripsi : this.state.tampungDeskripsi,
            batasBayar : this.state.tampungBatasBayar
        }
        // console.log(this.state.tampungGambar)
        bodyFormData.append('data', JSON.stringify(data))
        bodyFormData.append('image', this.state.tampungGambar[0])
    this.setState({loadingPost: true})
    Axios.post(urlApi + 'managetravel/posttravel', bodyFormData, options)
    .then((res) => {
        swal ('Yes', 'Travel Added succes', 'success')
        this.setState({
            tampungDestinasi: '',
            tampungHarga: 0,
            tampungMaskapai: '',
            tampungHotel: '',
            tampungBerangkat: '',
            tampungPulang: '',
            tampungKuota: 0,
            tampungWisata: '',
            tampungDeskripsi: '',
            tampungGambar: '',
            tampungBatasBayar: '',
            loadingPost: false
            })
    })
    .catch((err) => {
        this.setState({loadingPost: false})
        console.log(err)
        swal ('Error', 'Add failed', 'error')
    })
}

    imagePost = (e) => {
        // console.log(e.target.files)
        if(e.target.files[0]) {
            this.setState({ tampungGambar: e.target.files })
        } else {
            this.setState({ tampungGambar: null })
        }
    }

    buatTutupPendaftaran = () => {
        Axios.post(urlApi + 'travel/tutuppendaftaran', { id : 100 + this.props.match.params.id, tutupDaftar: '2019/12/20', idPaket : this.props.match.params.id  })
        .then(() => {
            swal('Ye!', 'Event kebuat', 'success')
            console.log(this.state.tampungTravelDetails)
        })
        .catch((err) => {
            console.log(this.state.tampungTravelDetails)
            swal('Ye!', 'Event kebuat', 'error')
        })
    }
        
    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div>
                <h2 style={{textAlign: "center", marginTop: "35px"}}>Manage Travel</h2>
                <div className="row" style={{float: "right", margin: "20px", width: "300px"}}>
                    <div className="col-md-6">
                        <input type="button" value="Search" className='btn btn-outline-warning btn-block' onClick={() => this.setState({ tampilPencarian : true})}/>
                    </div>
                    <div className="col-md-6">
                        <input type="button" value="Add new" className='btn btn-success btn-block' onClick={() => this.setState({ showPostTravel: true })}/>
                    </div>
                </div>
               {
                   this.state.showPostTravel
                   ?
                   <>
                   <table className='table' style={{marginTop: "35px"}}>
                   <thead className='thead-dark'>
                       <tr style={{textAlign: "center"}}>
                           <th>Destinasi</th>
                           <th>Harga</th>
                           <th>Maskapai</th>
                           <th>Berangkat</th>
                           <th>Pulang</th>
                           <th>Batas Pendaftaran</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDestinasi : e.target.value})} value={this.state.tampungDestinasi}/></td>
                           <td><input type="number" className='form-control' onChange={(e) => this.setState({ tampungHarga : e.target.value})} value={this.state.tampungHarga}/></td>
                           <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungMaskapai : e.target.value})} value={this.state.tampungMaskapai}/></td>
                           <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungBerangkat : e.target.value})} value={this.state.tampungBerangkat}/></td>
                           <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungPulang : e.target.value})} value={this.state.tampungPulang}/></td>
                           <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungBatasBayar : e.target.value})} value={this.state.tampungBatasBayar}/></td>
                       </tr>
                   </tbody>
                </table>
                   <table className='table' style={{marginTop: "35px"}}>
                       <thead className='thead-dark'>
                           <tr style={{textAlign: "center"}}>
                               <th>Hotel</th>
                               <th>Kuota</th>
                               <th>Wisata</th>
                               <th>Deskripsi</th>
                               <th>Path Gambar</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungHotel : e.target.value})} value={this.state.tampungHotel}/></td>
                               <td><input type="number" className='form-control' onChange={(e) => this.setState({ tampungKuota : e.target.value})} value={this.state.tampungKuota}/></td>
                               <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungWisata : e.target.value})} value={this.state.tampungWisata}/></td>
                               <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDeskripsi : e.target.value})} value={this.state.tampungDeskripsi}/></td>
                               <td><input type="file" className='form-control' onChange={this.imagePost} /></td>
                           </tr>
                       </tbody>
                       <tfoot>
                           <tr>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td>
                                   {
                                       this.state.loadingPost
                                       ?
                                       <>
                                       <center>
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </center>
                                        </>
                                        :
                                        <input type="submit" value="Add" className='btn btn-success btn-block' onClick={this.onBtnPostTravel}/>
                                   }
                                </td>
                               <td><input type="button" value="Close" className='btn btn-danger btn-block' onClick={() => this.setState({ showPostTravel: false })}/></td>
                           </tr>
                       </tfoot>
                   </table>
                   </>
                   :
                   null
               }
                {
                    this.state.tampilPencarian === false
                    ?
                    null
                    :
                    <>
                    <div className="row" style={{float: "left"}}>
                        <div className="col-md-6">
                            <input type="text" className='form-control' style={{margin: "20px"}} onChange={(e) => this.setState({ inputPencarian : e.target.value })}/>
                        </div>
                        <div className="col-md-3">
                            <input type="button" value="Cari" className='btn btn-outline-warning btn-block' style={{margin: "20px"}} onClick={this.getPencarianTravel}/>
                        </div>
                        <div className="col-md-3">
                            <input type="button" value="Cancel" className='btn btn-danger btn-block' onClick={() => this.setState({ tampilPencarian: false, tampungHasilCari: [] })} style={{margin: "20px"}}/>
                        </div>
                    </div>
                    </>
                }

                <table className='table' style={{marginTop: "35px"}}>
                    <thead className='thead-dark'>
                        <tr style={{textAlign: "center"}}>
                            <th>Destinasi</th>
                            <th>Harga</th>
                            <th>Berangkat</th>
                            <th>Pulang</th>
                            <th>Options</th>
                            <th>On Trip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tampilPencarian
                            ?
                            <>
                            {this.renderHasilCari()}
                            </>
                            :
                            <>
                            {this.renderManageTravel()}
                            </>
                        }
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
  
  export default connect(mapStateToProps)(ManageTravel);