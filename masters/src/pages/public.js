import React, {Component} from 'react';
import NavHelper from '../components/nav-helper'

// class Public extends Component() {
//   consructor(props){
//     super(props);
//
//
//   }
//
//   render(){
//     return (
//       <div>This is your public page!</div>
//     );
//   };
// }
const Public = (props) => {



  return (
    <NavHelper className="container" >
      <header role='banner'>
        <h1>Labelr</h1>
      </header>
      <div>
        <p>We label stuff for you, because, we can&trade;</p>
        <a href='/login' className='button button-large'>
          <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
        </a>
      </div>
    </NavHelper>
  );
}

export default Public
