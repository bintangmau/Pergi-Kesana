import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {userLogin, resetUser} from '../../redux/actions/userAction'
import Logo1 from '../../Photo/LogoNew.png'
import './style.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Cookie from 'universal-cookie';
import swal from 'sweetalert'


let cookieObj = new Cookie()

class Navbarr extends React.Component {
    state = {
        navbarOpen : false
        
    }

    logOut = () => {
        swal ('Notification', 'Kon wis metu cok', 'success')
        cookieObj.remove('userData')
        this.props.resetUser()
    }

    
render() {
return (
<div>
   {/* <Navbar light expand="md" className='navbar' >
        <NavbarBrand >
            <h2 className='judul'>Pergi-Kesana <i class="fa fa-plane" aria-hidden="true"></i></h2>
        </NavbarBrand>
        <NavbarToggler onClick={() => this.setState({navbarOpen : !this.state.navbarOpen})}/>
        <Collapse navbar>
            <Nav className='ml-auto'>
            <NavItem className='mt-3'>
                <h3>
                <i class="fa fa-search" aria-hidden="true" style={{color : 'white'}}></i>
                </h3>
            </NavItem>
                {
                    this.props.userObj.username !== '' && this.props.userObj.role !== ''
                    ?
                    <>
                    <NavItem className='navFont mt-3'>
                        <NavLink>{this.props.userObj.username}</NavLink>
                    </NavItem>
                    <NavItem className='navFont mt-3'>
                        <NavLink>{this.props.userObj.role}</NavLink>
                    </NavItem> 
                    <NavItem className='mt-3'>
                        <NavLink><Link to='/' className='navFont'>Home</Link></NavLink>
                    </NavItem>
                &nbsp;&nbsp;
                <UncontrolledDropdown>
                    <DropdownToggle style={{color : "white",border: "2px solid white"}}  className='navFont mt-3' >
                        More
                    </DropdownToggle>
                    <DropdownMenu right className='navFont mt-3'>
                    <DropdownItem>
                        About Us
                    </DropdownItem>
                    <DropdownItem onClick={this.logOut}>
                        Log Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                    </>
                    :
                    <>
                <NavItem className='mt-3'>
                    <NavLink><Link to='./auth' className='navFont' style={{textDecoration:"none"}}>Sign In</Link></NavLink>
                </NavItem>
                <NavItem className='mt-3'>
                    <NavLink><Link to='/' className='navFont' style={{textDecoration:"none"}}>Home</Link></NavLink>
                </NavItem>
                &nbsp;&nbsp;
                <UncontrolledDropdown>
                    <DropdownToggle style={{color : "white",border: "2px solid white"}}  className='navFont mt-3' >
                        More
                    </DropdownToggle>
                    <DropdownMenu right className='navFont mt-3'>
                    <DropdownItem>
                        About Us
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </>
                }
                
            </Nav>
        </Collapse>
   </Navbar> */}
   <nav>
       <div className="logo">
           <h4>Pergi-Kesana <i class="fa fa-plane" aria-hidden="true"></i></h4>
       </div>
        {
            this.props.userObj.username !== '' && this.props.userObj.role !== ''
            ? 
            <> 
            <div className="row" style={{width: "600px"}}>
                <div className="col-md-3">
                    <Link to='/'>
                        <button  className='btn btn-outline-dark btn-block'>
                            <p style={{color: "white", margin: "10px"}}>Home</p>
                        </button>
                    </Link>
                </div>
                <div className="col-md-3">
                    {this.props.userObj.role === 'user'
                    ?
                    <>
                        <Link to='/mytrip'>
                            <button  className='btn btn-outline-dark btn-block'> 
                                <p style={{color: "white", margin: "10px"}}>My Trip</p>
                            </button>        
                        </Link>
                    </>
                    :
                    null
                    }
                </div>
                <div className="col-md-3">
                    <Link to='/soal'>
                        <button  className='btn btn-outline-dark btn-block'>
                            <p style={{color: "white", margin: "10px"}}>Ask</p>
                        </button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <Link to='/history'>
                        <button  className='btn btn-outline-dark btn-block'>
                            <p style={{color: "white", margin: "10px"}}>Activity</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="row" style={{width: "300px"}}>
                    <div className="col-md-6">
                        {
                            this.props.userObj.role === "user"
                            ?
                            <Link to={`/topup/${this.props.userObj.id}`}>
                                <button className='btn btn-success'>
                                    <p style={{margin: "10px"}}>Top Up</p>
                                </button>
                            </Link>
                            :
                            null
                        }
                       
                    </div>
                    <div className="col-md-6">
                        <button onClick={this.logOut} className='btn btn-danger'>
                            <p style={{color: "black", margin: "10px"}}>Keluar</p>
                        </button>
                    </div>
                </div>
               
            </div>
            </>
           :
           <>
           <div className="row" style={{width: "600px"}}>
           
               <div className="col-md-3">
                <Link to='/'>
                    <button className='btn btn-outline-dark btn-block'>
                      <p style={{color: "white", margin: "10px"}}>Home</p>
                    </button>
                </Link>
               </div>
               <div className="col-md-3">
                <Link to='/auth'>
                    <button className='btn btn-outline-dark btn-block'>
                    <p style={{color: "white", margin: "10px"}}>Sign-In</p>
                    </button>
                </Link>
               </div>
               <div className="col-md-6">
                <Link to='/aboutus'>
                    <button className='btn btn-outline-dark btn-block'>
                    <p style={{color: "white", margin: "10px"}}>About Us</p>
                    </button>
                </Link>
               </div>
              
           </div>
          
                
                
                
          
          </>
        } 
          
       
       <div className="burger">
           <div className="line1"></div>
           <div className="line2"></div>
           <div className="line3"></div>
       </div>
   </nav>
   
</div>
);
}
}

const mapStateToProps = (state) => {
    return {
        userObj : state.user
    }
}
export default connect(mapStateToProps, {userLogin, resetUser})(Navbarr);