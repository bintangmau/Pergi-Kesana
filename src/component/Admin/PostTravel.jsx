import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class PostTravel extends Component {
    state = {
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
        tampungBatasBayar: ''
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

            bodyFormData.append('image', this.state.tampungGambar[0])
            bodyFormData.append('data', JSON.stringify(data))
            var value = bodyFormData.get('data')
            console.log(value)  
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
                tampungBatasBayar: ''
                })
        })
        .catch((err) => {
            swal ('Error', 'Add failed', 'error')
            console.log(this.state.tampungGambar)
        })
    }

    imagePost = (e) => {
        console.log(e.target.files)
        if(e.target.files[0]) {
            this.setState({ tampungGambar: e.target.files })
        } else {
            this.setState({ tampungGambar: null })
        }
    }

    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div>
                <h1 style={{marginTop: "35px", textAlign: "center"}}>Post travel</h1>
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
                                <td></td>
                                <td><input type="submit" value="Add" className='btn btn-success btn-block' onClick={this.onBtnPostTravel}/></td>
                            </tr>
                        </tfoot>
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
  
  export default connect(mapStateToProps)(PostTravel);