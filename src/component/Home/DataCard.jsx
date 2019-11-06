import React, { Component } from 'react';
import './DataCard.css'
import Gambar2 from '../Home/balonsedt.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { MDBNotification } from "mdbreact";



class DataCard extends Component {

    state = {
        belumLogin : false
    }


render() {
return (
<div>
    <div className="bungkus container-fluid">
        <div className="kartu">
            <div className="img-box">
                {
                this.props.username !==''
                ?
                <Link to='./masjid'>
                <img src='http://www.bestfunforall.com/freepik1/imgs/Muslim%20praying%20at%20medina%20mosque%20Wallpapers%207.jpg' alt="" />
                </Link>
                :
                <Link to='./auth'>
                <img src='http://www.bestfunforall.com/freepik1/imgs/Muslim%20praying%20at%20medina%20mosque%20Wallpapers%207.jpg' alt="" />
                </Link>
        
                }
            </div>
            <div className="content">
                <h2>
                    CARI MASJID<br /><span>GENDENG DESIGN</span>
                </h2>
                <p>Informasi mengenai Masjid di tujuan</p>
            </div>
        </div>
        <div className="kartu">
            <div className="img-box">
                {
                this.props.username !==''
                ?
                <Link to='./paketwisata'>
                <img src={Gambar2} alt="" />
                </Link>
                :
                <Link to='./auth'>
                <img src={Gambar2} alt="" />
                </Link>
                }
            </div>
            <div className="content">
                <h2>
                    Paket Travel<br /><span>GENDENG DESIGN</span>
                </h2>
                <p>Jalan lebih gampang dengan Paket Travel</p>
            </div>
        </div>
        <div className="kartu">
            <div className="img-box">
            {
                this.props.username !==''
                ?
                <Link to='./food'>
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                </Link>
                :
                <Link to='./auth'>
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                </Link>
                } 
                
            </div>
            <div className="content">
                <h2>
                    Food Information<br /><span>GENDENG DESIGN</span>
                </h2>
                <p>Cobain kuliner gausa bingung ada Informasi mengenai makanan sekitar</p>
            </div>
        </div>
    </div>
</div>
);
}
}

const mapStateToProps = state => {
return {
username : state.user.username
}
}

export default connect(mapStateToProps)(DataCard);