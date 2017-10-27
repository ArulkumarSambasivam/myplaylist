import React from 'react'
import PropTypes from 'prop-types'


class Todo extends React.Component {

  constructor(props) {  
    super(props);  
   
  }
  componentDidUpdate = () => {
    console.log("componentDidUpdate"+this.props.text);
  };
  componentDidMount = () => {
    console.log("componentDidMount"+this.props.text);
  };
  /*shouldComponentUpdate = () => {
     return false;
  };*/
    render() {
    console.log("render", false, "()");
    return (
  <li
    onClick={this.props.onClick}
    style={{
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }}
  >
    {this.props.text}
  </li>
)

  }
}


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

