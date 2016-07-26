import React, {Component} from 'react';
import styles from './styles/main.styl';
import Router from './router';
import app from 'ampersand-app';

window.app = app;


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

app.extend({
  init() {
    this.router = new Router()
    this.router.history.start()

  }
})

app.init();
