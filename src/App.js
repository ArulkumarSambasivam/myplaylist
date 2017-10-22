import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
     <BasicExample/>
    );
  }
}


const BasicExample = () => (
  <Router>
    <div>
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
   </nav>
    <tbody class="list row"></tbody>
   

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
var list = document.querySelector('.list'),
  last = new Date(),
  threshold = 100,
  count = -1,
  innerHTML = "";

class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log(arguments)

    this.events = [""];
    console.log("constructor", false, '(props, context, updater)')
    this.state = {
      count: 0
    };
  }
  log = (txt, user, args) => {
    var now = new Date();
    count++;
    //var argsinfo = ((args) ? args.length : 0)+' arguments';
    txt = txt+args;
    if (now - last > threshold) {
      innerHTML = '<tr class="row"><td class="col-xs-12" colspan="3"><br></td></tr>' + innerHTML;
      last = now;
      count = 0;
    }
    innerHTML = '<tr class="row'+((user) ? ' user' : '')+'"><td class="col-xs-1">' + count + '</td><td class="col-xs-9">' + txt + '</td><td class="col-xs-2 mono">' + JSON.stringify(this.state) + '</td></tr>' +innerHTML;

  };

  componentWillMount = () => {
    console.log("componentWillMount", false, "()");
  };
componentWillUnmount = () => {
    console.log("componentWillUnmount", false, "()");
  };

  componentWillUpdate = () => {
    console.log("componentWillUpdate", false, "(nextProps, nextState, nextContext)");
  };
  componentDidUpdate = () => {
    console.log("componentDidUpdate", false, "(prevProps, prevState, prevContext)");
  };

  shouldComponentUpdate = () => {
    console.log("shouldComponentUpdate", false, "(nextProps, nextState, nextContext)");
    return true;
  };

  // Called only once 
  componentDidMount = () => {
    console.log("componentDidMount", false, "(prevProps, prevState, prevContext)")
  };

  // NOT CALLED IN ES6
  getInitialState = () => {
    console.log("getInitialState", false, "()");
  };
  // NOT CALLED IN ES6
  getDefaultProps = () => {
    console.log("getDefaultProps", false, "()");
  };
  // NOT CALLED IN ES6
  componentWillReceiveProps = () => {
    console.log("componentWillReceiveProps", false, "(nextProps)");
  };

  // This is a non-react-native function
  increment = () => {
    console.log("increment", true, "()")
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    console.log("render", false, "()");
    return (
      <button className="btn btn-primary" onClick={this.increment}>Clicked {this.state.count} time{(this.state.count>1 || this.state.count===0) ? 's' : ''}</button>

    )
  }
}


const About = () => (
   <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


export default App;
