import React from 'react'
import CheckoutFrame from '../views/checkout/checkoutframe.js'
import Cart from '../views/checkout/cart.js'
import Invoicing from '../views/checkout/Invoicing.js';
import DivComponent from '../views/divComponent.js'; //stateless component
import Frame from '../views/frame.js'
import {countItems,getItems} from '../../utils/localStorage'


const Buy = ()=>{

  const [Form,setForm] = React.useState({
    firstName:"",
    lastName:"",
    address:"",
    country:"",
    state:"",
    sameAddress:false,
    saveInfo:false,
    paymentMethod:"",
    ccName:"",
    ccNumber:"",
    ccExpiration:"",
    ccCvv:""
  })


  React.useEffect(() => {
    //console.log("total a pagar",CalcularTotalPagar)
  },[])

  const CalcularTotalPagar = (()=>{
    return getItems().reduce((prev,curr)=>prev+curr.price,0)
  })()

  const items = getItems()


  const handleChange = (event)=>{
    setForm({...Form,[event.target.name]:event.target.value})
    //console.log(event);
    console.log("cambió-",event.target.name,event.target.value)
  }

  const handleChangeCheckInputs = (event)=>{
    setForm({...Form,[event.target.name]:event.target.checked})

    console.log("cambió",event.target.name,event.target.checked)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    if(Object.values(Form).some((ele)=>ele==="")){
      console.log(Form)
      alert("tienes datos por completar")

    }
    else
      alert(`compra por USD ${CalcularTotalPagar} realizada exitosamente`)
    
  }

  return(
        <Frame cant_items={items.length}>
          <CheckoutFrame>
            <DivComponent innerClassName="row g-5">
              <Cart items={items} cant_items={items.length}  totalPagar={CalcularTotalPagar}/>
              <Invoicing handleChange={handleChange} handleChangeCheckInputs={handleChangeCheckInputs} handleSubmit={handleSubmit}  {...Form}/>
            </DivComponent>
          </CheckoutFrame>
        </Frame>)
}

export default Buy;
