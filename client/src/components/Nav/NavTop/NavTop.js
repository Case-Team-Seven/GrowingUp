import React from 'react';
import './NavTop.css';
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
            </NavLink >
            </NavItem>
            <NavItem className="navItem"><NavLink href="/login" className="three-d">
            Login/Sign-Up 
              <span aria-hidden="true" className="three-d-box">
                <span id="front">Login/Sign-Up</span>
                <span id="back">Login/Sign-Up</span>
              </span>
            </NavLink >
            </NavItem>
            
          </Nav>
        </Navbar>
      )
    };
  
    
};

export default NavTop;