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
              <ul className='nav-links'>        
                <Link to='/'>
                    <li>
                    <a href="">Home</a>
                    </li>
                </Link>
                <Link>
                <li>
                    <a href="#">{this.props.userObj.username}</a>
                </li>
                </Link>
                <Link>
                <li>
                    <a href="#">{this.props.userObj.role}</a>
                </li>
                </Link>
                {this.props.userObj.role === 'user'
                ?
                <>
                    <Link to='/mytrip'>
                        <a>My Trip</a>        
                    </Link>
                </>
                :
                null
                }
                <Link>
                <li>
                    <a href="#breakingnews">News</a>
                </li>
                </Link>
                <Link>
                    <li onClick={this.logOut}>
                        <a>Log Out</a>
                    </li>
                </Link>

           </ul>
           :
           <>
           <ul className='nav-links'>
                <Link to='/'>
                    <li>
                    <a href="">Home</a>
                    </li>
                </Link>
                <Link to='/auth'>
                <li>
                    <a href="#">Sign In</a>
                </li>
                </Link>
                <li>
                    <a href="#">About Us</a>
                </li>
           </ul>
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