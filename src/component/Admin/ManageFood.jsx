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
                    <td><img src={val.pathGambar} width="200px" alt=""/></td>
                    <td>{val.deskripsi}</td>
                    <td><input type="button" value="Delete" className='btn btn-danger' onClick={() => this.deleteFood(val.idfood)}/></td>
                </tr>
            )
        })
    }

    postFood = () => {
        Axios.post(urlApi + 'managefood/postfood', { makanan: this.state.tampungMakanan, deskripsi: this.state.tampungDeskripsi, idPaket: this.state.tampungID,
                                                    pathGambar: this.state.tampungPathGambar })

            .then((res) => {
                swal('Success', 'Post Success', 'success')
                this.getFood()
            })
            .catch((err => {
                console.log(this.state.tampungMakanan)
                swal('Ups', 'Post Failed', 'error')
            }))
    }

    deleteFood = (idtoam) => {
        Axios.post(urlApi + 'managefood/deletefood', { idFood : idtoam})
        .then((res) => {
            swal('Success', 'Delete Success', 'success')
            this.getFood()
        })
        .catch((err) => {
            swal('Ups', 'Delete Failed', 'error')
        })
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

    render(){
        if(this.props.username === ''){
            return <Redirect to='/'/>
        }
        return (
            <div className='container-fluid'>
                <h1>Managefood</h1>
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
                    <tfoot>
                        <tr style={{textAlign: "center"}}>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungMakanan : e.target.value})}/></td>
                            <td><input type="number" className='form-control' onChange={(e) => this.setState({ tampungID : e.target.value})}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungPathGambar : e.target.value})}/></td>
                            <td><input type="text" className='form-control' onChange={(e) => this.setState({ tampungDeskripsi : e.target.value})}/></td>
                            <td><input type="button" value="Add" className='btn btn-success btn-block' onClick={this.postFood}/></td>
                        </tr>
                    </tfoot>
                </table>
                <div className="container" style={{marginTop: "50px"}}>
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
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps)(ManageFood);
