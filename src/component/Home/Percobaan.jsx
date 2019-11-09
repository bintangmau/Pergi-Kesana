import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Percobaan extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#45423c", height: "870px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <h1 style={{marginTop: "80px", color: "white", letterSpacing: "2px"}}>Mari menambah pengalaman dan pengetahuan bersama Kami di berbagai negara!</h1>
                        </div>
                        <div className="col-md-6">
                            <center style={{padding: "20px"}}>
                            <h4 style={{marginTop: "80px", color: "white", letterSpacing: "2px"}}>Paket Wisata</h4>
                                <Link to='/paketwisata'>
                                    <input type="button" value="Get Started" className='btn btn-outline-primary' style={{ width: "200px", height: "50px", marginTop: "20px"}}/>
                                </Link>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{marginTop: "80px", color: "white", letterSpacing: "2px"}}>Cari Informasi makanan pilihan di berbagai Negara !</h1>
                        </div>
                        <div className="col-md-6">
                            <center style={{padding: "20px"}}>
                            <h4 style={{marginTop: "80px", color: "white", letterSpacing: "2px"}}>Makanan</h4>
                                <Link to='/food'>
                                    <input type="button" value="Get Started" className='btn btn-outline-primary' style={{ width: "200px", height: "50px", marginTop: "20px"}}/>
                                </Link>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{marginTop: "80px", color: "white", letterSpacing: "2px"}}>Booking Tiket Kesana Airlines dengan Diskon bersama Kami !</h1>
                        </div>
                        <div className="col-md-6">
                            <center style={{padding: "20px"}}>
                            <h4 style={{marginTop: "80px", color: "white", letterSpacing: "2px"}}>Tiket</h4>
                                <Link to='/tiket'>
                                    <input type="button" value="Get Started" className='btn btn-outline-primary' style={{ width: "200px", height: "50px", marginTop: "20px"}}/>
                                </Link>
                            </center>
                        </div>
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
export default connect(mapStateToProps)(Percobaan);