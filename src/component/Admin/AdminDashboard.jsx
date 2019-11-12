import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AdminDashboard extends Component {
    render() {
        if(this.props.username === '') {
            return <Redirect to='/'/>
          }
        return (
            <div>
                <div className="container">
                    <h1 style={{textAlign: "center", marginTop: "35px"}}>Admin</h1>
                    <div className="row" style={{marginTop: "35px"}}>
                        <div className="col-md-3">
                            <Link to='/manageusers'><input type="button" value="Manage User" className='btn btn-outline-dark btn-block' style={{height: "200px"}}/></Link>
                        </div>
                        <div className="col-md-3">
                            <Link to='/managetravel'><input type="button" value="Manage Travel" className='btn btn-outline-success btn-block' style={{height: "200px"}}/></Link>
                        </div>
                        <div className="col-md-3">
                            <Link to='/answerquestions'><input type="button" value="Answer Questions" className='btn btn-outline-warning btn-block' style={{height: "200px"}}/></Link>
                        </div>
                        <div className="col-md-3">
                           <Link to='/managefood'><input type="button" value="Manage Food" className='btn btn-outline-danger btn-block' style={{height: "200px"}}/></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3" style={{marginTop: "35px"}}>
                            <Link to='/analisaadmin'><input type="button" value="Analisa" className='btn btn-outline-info btn-block' style={{height: "200px"}}/></Link>
                        </div>
                        <div className="col-md-3" style={{marginTop: "35px"}}>
                            <Link to='/pemasukan'><input type="button" value="Income" className='btn btn-outline-dark btn-block' style={{height: "200px"}}/></Link>
                        </div>
                        <div className="col-md-3" style={{marginTop: "35px"}}>
                            <Link to='/managetiket'><input type="button" value="Manage Ticket" className='btn btn-outline-dark btn-block' style={{height: "200px"}}/></Link>
                        </div>
                    </div>
                    
                </div>              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      username : state.user.username,
      role : state.user.role
    } 
  }
  
  export default connect(mapStateToProps)(AdminDashboard);