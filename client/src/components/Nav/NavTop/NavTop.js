import React from 'react';
import './NavTop.css';
import Logo2 from '../../Logo/logo'
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
//import { prependOnceListener } from 'cluster';
import { withAuth } from '@okta/okta-react';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };

//     {/* isOpen prop determines whether the modal should be visible. The toggle callback can be used to toggle the value of isOpen in the controlling component. */}
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//         <div className="navBarTop">
//           <Navbar  background-color="white" expand="md">
//             {/* Brandname */}
//             <NavbarBrand href="/">
//               Grownupish
//             </NavbarBrand>
//             {/* Add toggler to auto-collapse */}
//             <NavbarToggler onClick={this.toggle} />
//             <Collapse isOpen={this.state.isOpen} navbar>

//               {/*Pull left */}
//               <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <NavLink href="/components/">
//                     Link Option
//                   </NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">
//                     GitHub
//                   </NavLink>
//                 </NavItem>


//                 {/* Pull right */}
//                 <UncontrolledDropdown nav inNavbar>

//                   <DropdownToggle nav caret>
//                     Your Profile
//                   </DropdownToggle>


//                   <DropdownMenu right>
//                     <DropdownItem>
//                       Option 1 (LogIn / View Your Profile ( When logged in))
//                     </DropdownItem>
//                     <DropdownItem>
//                       Option 2 ("LogOut" (Can be seen only When logged in)
//                     </DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem>
//                       Reset
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </Nav>
//             </Collapse>
//           </Navbar>
//         </div>
//     );
//   }
// }


// import React from 'react';

class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
  }
 

  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    //if (this.state.authenticated === null) return null;
    var icon = (
      <span class="logo">
        <a href="/">
          <img src="../../Logo/logo.png" height="33" width="120" alt="text here" /></a>
      </span>
    );

    const button = this.state.authenticated ? 'Logout' : 'Login';
      return (
          // <Nav>
          //   <NavItem className='navItem'>
          //     <a href={'/topics/:id/posts'}>Home</a>
          //   </NavItem>
          //   <NavItem className='navItem'>
          //     <a href={'/topics/:id/posts'}>Home</a>
          //   </NavItem>
          // </Nav>
        <Navbar className="nav">
          <Nav className="block-menu">
          <img src={require('../../Logo/logo.png')} id="logoDiv" />
            <NavItem className="navItem"><NavLink href="/topics/1/posts" className="three-d">
            Home
              <span aria-hidden="true" className="three-d-box">
                <span id="front">Home</span>
                <span id="back">Home</span>
              </span>
            </NavLink>
            </NavItem>
            <NavItem className="navItem"><NavLink href="/userProfile/1" className="three-d">
            Your Account 
              <span aria-hidden="true" className="three-d-box">
                <span id="front">Your Account</span>
                <span id="back">Your Account</span>
              </span>
            </NavLink ></NavItem>
            
            <NavItem className="navItem"><NavLink href={this.userAuthenticated ? this.props.auth.logout('/') : "/Login"} className="three-d">
            {button}
              <span aria-hidden="true" className="three-d-box">
                <span id="front">{button}</span>
                <span id="back">{button}</span>
              </span>
            </NavLink ></NavItem> 
            <NavItem className="navItem"><NavLink href="/register" className="three-d">
            Register 
              <span aria-hidden="true" className="three-d-box">
                <span id="front">Register</span>
                <span id="back">Register</span>
              </span>
            </NavLink ></NavItem>
          </Nav>
        </Navbar>
      )
    }
  }
export default withAuth(NavTop);
