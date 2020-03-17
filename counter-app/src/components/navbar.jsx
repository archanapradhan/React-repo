import React, { Component } from "react";

//stateless functional components
//when we dont have any state and dealing with only a function via props
//we dont have to have a class instead we can maintain a stateless functional component
//by seting  an arrow function

//also, how to destructure arguments,
//as we will have to destructure every prroperty such as 'totalCounters' that has reference with props.xxxx

//const NavBar = props => {
//the above statement can be written as below ,
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badgle-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

//compare with the below code which has is  class for NavBar
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badgle-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
