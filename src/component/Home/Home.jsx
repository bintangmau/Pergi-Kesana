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
import Percobaan from './Percobaan'

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
    </div>
    <div className="container">
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
{/* 
      <center>
        <button className='btn btn-outline-dark' style={{height: "100px", width: "200px"}}>
            Cari
        </button>
      </center> */}

      <div className='container' style={{marginTop:'150px'}}>
        <div className="row">
          <div className="col-md-6">
            <p style={{fontSize: "40px"}}>Mengapa <span style={{color:"brown", marginTop: "120px"}}>Pergi-Kesana</span> ?</p>
          </div>
          <div className="col-md-6">
              <p style={{fontSize: "20px"}}>Harga yang kami tawarkan sangat terjangkau dibandingkan Travel lain, Kalau ada yang lebih murah kami akan memberi diskon sekarang juga.</p>
          </div>
        </div>
        <div className="row" style={{marginTop: "80px"}}>
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <p style={{fontSize: "20px"}}>Harga yang telah kami patok tsb sudah mencakup semua biaya Travel, tidak ada biaya tambahan lagi, jika ada kami siap mengganti.</p>  
          </div>
        </div>
        <div className="row" style={{marginTop: "80px"}}>
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <p style={{fontSize: "20px"}}>Mitra Guide kami sangat berpengalaman, dan memliki lisensi Internasional. jadi para Traveller, selain berwisata juga sekalian belajar.</p>  
          </div>
        </div>
      </div>

    <div style={{marginTop: "200px"}}>
      <Percobaan />
    </div>
    
    {/* <div style={{margin: "50px", padding: "20px"}}>
      <h4 style={{color: "white", textAlign: "center"}}><span style={{color: "brown"}}>Pergi-Kesana</span> Ticket</h4>
      <div className="row">
        <div className="col-md-6">
            <p style={{textAlign: 'center'}}>
            - Nama pemesan : Ari <br/>
            - Maskapai : Garuda <br/>
            - Harga : 1000 USD <br/>  
          </p>
        </div>
        <div className="col-md-6">
            <p style={{textAlign: 'center'}}>
            - Harga : 1000 USD <br/>
            - Dari jakarta : 323232 <br/>
            - Sampai Jakarta : 23232 <br/>  
          </p>
        </div>
      </div> */}
      
      {/* <p style={{textAlign: "center"}}>
        Terima kasih atas kepercayaan Anda, Salam hangat dari kami <br/>
        <span>Pergi-Kesana</span>
      </p>
    </div> */}
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
          <div className="col-md-4">
              <Link to='/soal'>
                <button className='btn btn-outline-dark btn-block'style={{height: "80px"}}>
                    Ask to Admin
                </button>
              </Link>
          </div>
          <div className="col-md-4">
              <Link to={`/topup/${this.props.id}`}>
                <button className='btn btn-outline-dark btn-block' style={{height: "80px"}}>
                    Top Up
                </button>
              </Link>
          </div>
          <div className="col-md-4">
                <Link to={'/history'}>
                  <button className='btn btn-outline-dark btn-block'style={{height: "80px"}}>
                      History
                  </button>
                </Link>
            </div>
        </div>
        <div className="row" style={{marginTop: "35px"}}>
            
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