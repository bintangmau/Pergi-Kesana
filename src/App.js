import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'
import Destinasi from './component/Destinasi'
import Masjid from './component/Home/Masjid/Masjid'
import Guide from './component/Guide'
import Home from './component//Home/Home'
import Register from './component/Auth/Register'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Auth from './component/Auth/Auth'
import PaketWisata from './component/Home/Paket Wisata/PaketWisata'
import DestinationBox from './component/Home/Paket Wisata/DestinationBox'
import DaftarTrip from './component/Home/Paket Wisata/DaftarTrip'
import Food from './component/Home/Food/Food'
import Slideshow from './component/Home/Slideshow'
import Cookie from 'universal-cookie'
import {connect} from 'react-redux'
import {keepLogin} from './redux/actions/userAction'
import AdminDashboard from './component/Admin/AdminDashboard'
import CartData from './component/Home/CardData/CardData'
import ManageUsers from './component/Admin/ManageUsers'
import ManageTravel from './component/Admin/ManageTravel'
import PostTravel from './component/Admin/PostTravel'
import EditTravel from './component/Admin/EditTravel'
import ProgressTrip from './component/Admin/ProgressTrip'
import MyTrip from './component/Home/Paket Wisata/MyTrip'
import Soal from './component/Home/Soal'
import AnswerQuestions from './component/Admin/AnswerQuestions'
import ChatUser from './component/Admin/ChatUser'
import ManageFood from './component/Admin/ManageFood'
import Payment from './component/Home/Payment'
import PaymentAll from './component/Home/PaymentAll'
import TopUp from './component/Home/TopUp'
import History from './component/Home/History'
import AnalisaAdmin from './component/Admin/AnalisaAdmin'
import UserIsiUlang from './component/Admin/UserIsiUlang'
import RegistrasiTravel from './component/Admin/RegistrasiTravel'
import PembatalanTravel from './component/Admin/PembatalanTravel'
import Pemasukan from './component/Admin/Pemasukan'
import TransaksiBerhasil from './component/Admin/TransaksiBerhasil'

let cookieObj = new Cookie()


class App extends React.Component {

  componentDidMount(){
    let cookieVar = cookieObj.get('userData')
    if(cookieVar){
      this.props.keepLogin(cookieVar)
    }
  }
  


render(){ 
  return (
   <div>
     <Navbar/>
     <Switch>
        <Route path = '/' component={Home} exact/>
        <Route path = '/auth' component={Auth} exact/>
        <Route path = '/destinasi' component={Destinasi} exact/>
        <Route path = '/masjid' component={Masjid} exact/>
        <Route path = '/guide' component={Guide} exact/>
        <Route path = '/register' component={Register} exact/>
        <Route path = '/paketwisata' component={PaketWisata} exact/>
        <Route path = '/destinationbox/:id' component={DestinationBox} exact/>
        <Route path = '/daftartrip/:id' component={DaftarTrip} exact/>
        <Route path = '/food' component={Food} exact/>
        <Route path = '/slideshow' component={Slideshow} exact/>
        <Route path = '/cartdata' component={CartData} exact/>
        <Route path = '/admindashboard' component={AdminDashboard} exact/>
        <Route path = '/manageusers' component={ManageUsers} exact/>
        <Route path = '/managetravel' component={ManageTravel} exact/>
        <Route path = '/posttravel' component={PostTravel} exact/>
        <Route path = '/edittravel/:id' component={EditTravel} exact/>
        <Route path = '/progresstrip/:id' component={ProgressTrip} exact/>
        <Route path = '/mytrip' component={MyTrip} exact/>
        <Route path = '/soal' component={Soal} exact/>
        <Route path = '/answerquestions' component={AnswerQuestions} exact/>
        <Route path = '/chatuser/:id' component={ChatUser} exact/>
        <Route path = '/managefood' component={ManageFood} exact/>
        <Route path = '/payment/:id' component={Payment} exact/>
        <Route path = '/paymentall/:id' component={PaymentAll} exact/>
        <Route path = '/topup/:id' component={TopUp} exact/>
        <Route path = '/history' component={History} exact/>
        <Route path = '/analisaadmin' component={AnalisaAdmin} exact/>
        <Route path = '/userisiulang' component={UserIsiUlang} exact/>
        <Route path = '/registrasitravel' component={RegistrasiTravel} exact/>
        <Route path = '/pembatalantravel' component={PembatalanTravel} exact/>
        <Route path = '/pemasukan' component={Pemasukan} exact/>
        <Route path = '/transaksiberhasil' component={TransaksiBerhasil} exact/>

        
        
     </Switch>
   </div>
  );
  }
  }



export default connect(null, {keepLogin})(withRouter(App));
