import React, { Component } from 'react';
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import '../Home/style.css'
import DataCard from './DataCard'
import { connect } from 'react-redux'
import Slideshow from './Slideshow'
import News from './News'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Footer from './Footer'

class Home extends Component {
  state = {
    tampungSaldoUser : 0
  }

  componentDidMount() {
    this.getSaldoUser()
  }

  getSaldoUser = () => {
    Axios.post(urlApi + 'payment/getsaldouser', { idUser : this.props.id })
    .then((res) => {
        this.setState({ tampungSaldoUser : res.data[0].saldoUser})
        console.log(this.state.tampungSaldoUser)
    })
    .catch((err) => {
        console.log(this.state.tampungSaldoUser)
       this.setState({ tampungSaldoUser: 0})
    })
  }


  render() {
    if(this.props.role === 'admin') {
      return <Redirect to='/admindashboard'/>
    }
    return (
    <div>
        <div className='latar'>
    <div className='container-fluid'>
     <Slideshow/>  
      <h1 className='tampil'>
        Buka Mata, Bumi ini Indah!
        <h5>
        <span className='judul' style={{fontSize : '25px'}}>Pergi-Kesana</span> akan membawa Anda menyaksikan keberagaman suku budaya,
        keseruan petualangan,
        kelezatan sensasi rasa,
        kekayaan hayati dan keindahan alam yang tersebar di beberapa tempat di Dunia.
      </h5>
      </h1>
    </div>
    {
      this.props.username === ''
      ?
      null
      :
      <>
      {
        this.state.tampungSaldoUser === 0
        ?
        <>
        <center style={{margin: "50px"}}>
          <h4>Ayo Top-Up <span style={{color: "green", fontWeight: "bold"}}>Kesana-PAY</span> !</h4>
          <p>- Diskon 20% Pada semua Travel !</p>
          <p>- Pembayaran lebih mudah dan cepat !</p>
        </center>
        </>
        :
        <center style={{margin: "50px"}}>
        <input type="button" value={`Your Kesana-PAY : ${this.state.tampungSaldoUser} USD`}  className='btn btn-outline-success'/>
      </center>
      }
      <div className="container" style={{marginTop: "40px"}}>
        <div className="row">
          <div className="col-md-6">
              <Link to='/soal'>
                <button className='btn btn-outline-secondary btn-block'>
                    Ask to Admin
                </button>
              </Link>
          </div>
          <div className="col-md-6">
              <Link to={`/topup/${this.props.id}`}>
                <button className='btn btn-outline-secondary btn-block'>
                    Top Up
                </button>
              </Link>
          </div>
        </div>
        <div className="row" style={{marginTop: "35px"}}>
            <div className="col-md-6">
                <Link to={'/history'}>
                  <button className='btn btn-outline-secondary btn-block'>
                      History
                  </button>
                </Link>
            </div>
        </div>
      </div>
        <DataCard/>
      </>
    }
    <Link to='/cartdata'>
    <input type="button" value="Test"/>
    </Link>
    <section id="breakingnews">
      <News/>
    </section>
      </div>
      <Footer />
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    username : state.user.username,
    role : state.user.role,
    id : state.user.id
  } 
}

export default connect(mapStateToProps)(Home);