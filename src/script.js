import Frame from './components/containers/frame.js';

const c = React.createElement



class SayHello extends React.Component {
    constructor(props) {
      super(props);
      this.state = {message: 'Hello!'};
      // Esta línea es importante!
      //this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        console.log(this.props.children)
      alert(this.state.message);
    }
  
    render() {
      // Porque `this.handleClick` está vinculada, podemos utilizarla como un manejador de evento
      return React.createElement("button", {
        onClick: this.handleClick
      }, this.props.children);
    }
  }

ReactDOM.render(c(Frame,null,"hello world"),document.getElementById("app"))



