import Header from '../views/header.js'
import Content from '../containers/content.js'

const c = React.createElement;

class Frame extends React.Component {
    constructor(props){
        super(props);

        this.state = {products:[]};
    }

    componentDidMount() { //hook que se llama cuando el componente es montado en el DOM
      
      fetch('https://fakestoreapi.com/products/?limit=9')
            .then(res=>res.json()) //res.json retorna una promesa también
            .then(data=>{
              console.log(data)
              this.setState({products:data})
            })
    }

    componentWillUnmount() { //se llama justo antes de que el componente sea desmontado del DOM
      //muy util para cerra conexiones a bd (por ejemplo)
      
    }

    componentDidUpdate(){ //una vez que el componente se actualiza

    }

    render(){
      return c('div',{className:"container"},
                c(Header,null),
                c(Content,{products:this.state.products})
              )
    }
}

export default Frame


// fetch('https://fakestoreapi.com/products/')
//             .then(res=>res.json())
//             .then(json=>console.log(json))