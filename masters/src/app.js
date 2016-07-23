import React, {Component} from 'react';

import styles from './styles/main.styl';


import Router from './router';




// class App extends Component {
//   constructor(props){
//     super(props);
//
//   };
//
//   render(){
//       return <div>{this.props.greeting}</div>
//   };
// }
//
// // const App = (props) => {
// //   return <div>{props.greeting}</div>
// // }
//
//
// ReactDOM.render(<App greeting="Hello Frontend Masters!" />, document.body )
// // document.write('Hello Frontend Masters!')

window.app = {
  init() {
    this.router = new Router()
    this.router.history.start()

  }
}

window.app.init()
