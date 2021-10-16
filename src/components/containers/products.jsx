import React from 'react'
import Content from '../views/content.js'
import Frame from '../views/frame.js'
import {setItemToShoppingCart,countItems} from '../../utils/localStorage'
import {getProducts} from '../../utils/api.js'

import '../views/auth/style.css'

class Products extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        products:[],
        selected_products:0,
        listar:20,
        is_loading:true
      };

      this.ClickCompra = this.ClickCompra.bind(this)
      this.handleChangeList = this.handleChangeList.bind(this)
    }

    ClickCompra(id_prod){
       
        setItemToShoppingCart(id_prod)
        
        this.setState({selected_products: countItems()})
    }

    handleChangeList(e){

      this.setState({is_loading:true})

      getProducts(e.target.value).then(data=>{
        this.setState({products:data})
      
        this.setState({
          [e.target.name]:e.target.value,
          is_loading:false
        })
      })
      
    }

    componentDidMount() { //hook que se llama cuando el componente es montado en el DOM
      

      getProducts(this.state.listar).then(data=>{
        this.setState({products:data})
      
        this.setState({selected_products: countItems(),is_loading:false})
      })
    }



    componentWillUnmount() { //se llama justo antes de que el componente sea desmontado del DOM
      //muy util para cerra conexiones a bd (por ejemplo)
      
    }

    componentDidUpdate(){ //una vez que el componente se actualiza
      
      

    }

    render(){
      return(
        <Frame cant_items={this.state.selected_products}>
          <Content 
            products          = {this.state.products}
            ClickCompra       = {this.ClickCompra}
            listar            = {this.state.listar}
            handleChangeList  = {this.handleChangeList}
            is_loading        = {this.state.is_loading}
          />
        </Frame>
      )
    }
}

export default Products