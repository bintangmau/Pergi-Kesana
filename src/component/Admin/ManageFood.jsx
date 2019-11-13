import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import Axios from 'axios'
import {urlApi} from '../../helper/database'
import {connect} from 'react-redux'


class ManageFood extends Component {
    state = {
        tampungTravel: [],
        tampungFood: [],
        tampungMakanan: '',
        tampungID: 0,
        tampungPathGambar: '',
        tampungDeskripsi: ''
    }

    componentDidMount() {
        this.getFood()
        this.renderFood()
        this.getIDPaket()
    }

    getFood = () => {
        Axios.post(urlApi + 'managefood/getmanagefood')
        .then((res) => {
            this.setState({ tampungFood : res.data})
            // swal('yeah', 'Get Food Sukses', 'success')
        })
        .catch((err) => {
            swal('ups', 'Get Food Failed', 'error')
        })
    }

    renderFood = () => {
        return this.state.tampungFood.map((val, idx) => {
            return (
                <tr key={idx} style={{textAlign: "center"}}>
                    <td>{val.makanan}</td>
                    <td>{val.idPaket}</td>
                    <td><img src={urlApi + val.pathGambar} width="200px" alt=""/></td>
                    <td>{val.deskripsi}</td>
                    <td><input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteFood(val.idfood)}/></td>
                </tr>
            )
        })
    }

    postFood = () => {
        let bodyFormData = new FormData()

        var options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        var data = {
            makanan: this.state.tampungMakanan, 
            deskripsi: this.state.tampungDeskripsi, 
            idPaket: this.state.tampungID
        }

        bodyFormData.append('data', JSON.stringify(data))
        bodyFormData.append('image', this.state.tampungPathGambar[0])
        
        if(this.state.tampungMakanan === '' || this.state.tampungID === 0 || this.state.tampungDeskripsi === '' || this.state.tampungPathGambar === '') {
            swal('ups!', 'Input correctly', 'warning') 
        } else {
            Axios.post(urlApi + 'managefood/postfood', bodyFormData, options)
                .then(() => {
                    swal('Success', 'Post Success', 'success')
                    this.setState({
                        tampungMakanan: '',
                        tampungID: 0,
                        tampungPathGambar: '',
                        tampungDeskripsi: ''
                    })
                    this.getFood()
                })
                .catch((err => {
                    console.log(err)
                    swal('Ups', 'Post Failed', 'error')
                }))
        }
    }

    deleteFood = (idtoam) => {
        if(window.confirm('Are you Sure to Delete this Travel ?')) {
            Axios.post(urlApi + 'managefood/deletefood', { idFood : idtoam})
            .then((res) => {
                swal('Success', 'Delete Success', 'success')
                this.getFood()
            })
            .catch((err) => {
                swal('Ups', 'Delete Failed', 'error')
            })
        }
    }

    getIDPaket = () => {
        Axios.post(urlApi + 'managetravel/getmanagetravel')
        .then((res) => {
            this.setState({ tampungTravel : res.data })
            // swal('Success', 'Get Travel ID Success', 'success')
        })
        .catch((err) => {
            swal('Success', 'Get Travel ID error', 'error')
        })
    }

    renderIDPaket = () => {
        return this.state.tampungTravel.map((val, idx) => {
            return (
                <tr style={{textAlign: "center"}}>
                    <td>{val.destinasi}</td>
                    <td>{val.id}</td>
                </tr>
            )
        })
    }

    imagePost = (e) => {
        if(e.target.files[0]) {
            this.setState({ tampungPathGambar: e.target.files })
        } else {
            this.setState({ tampungPathGambar: null })
        }
    }

    render(){
        if(this.props.username === ''){
            return <Redirect to='/'/>
        }
        return (
            <div className='container-fluid'>
            <h1 style={{marginTop: "35px", textAlign: "center"}}>Managefood</h1>
            <div className="container" style={{marginTop: "20px"}}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Food</th>
                            <th>ID</th>
                            <th>Photo</th>
                            <th>Desc</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: "center"}}>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungMakanan : e.target.value})} value={this.state.tampungMakanan}/></td>
                            <td><input type="number" className='form-control' onChange={(e) => this.setState({ tampungID : e.target.value})} value={this.state.tampungID}/></td>
                            <td><input type="file" className='form-control' onChange={this.imagePost}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDeskripsi : e.target.value})} value={this.state.tampungDeskripsi}/></td>
                            <td><input type="button" value="Add" className='btn btn-success btn-block' onClick={this.postFood}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <div className="row" style={{marginTop: "35px"}}>
                    <div className="col-md-6">
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr style={{textAlign: "center"}}>
                                <th>Food</th>
                                <th>ID</th>
                                <th>Photos</th> 
                                <th>Desc</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderFood()}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table className='table'>
                            <thead className='thead-dark'> 
                                <tr style={{textAlign: "center"}}>
                                    <th>Place</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderIDPaket()}
                            </tbody>
                        </table>    
                    </div>
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

export default connect(mapStateToProps)(ManageFood);
