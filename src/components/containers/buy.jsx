import React,{useEffect,useState} from 'react'
import { Redirect } from 'react-router-dom';
import CheckoutFrame from '../views/checkout/checkoutframe.js'
import Cart from '../views/checkout/cart.js'
import Invoicing from '../views/checkout/Invoicing.js';
import DivComponent from '../views/divComponent.js'; //stateless component
import Frame from '../views/frame.js'
import {getItems, getSession} from '../../utils/localStorage'


const Buy = ()=>{

  const Session = getSession()

  const [Form,setForm] = React.useState({
    firstName: Session.name,
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

  const [session,setSession]=useState(getSession());

  useEffect(() => {
    //if(!getSession())

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
        session?<Frame cant_items={items.length}>
          <CheckoutFrame>
            <DivComponent innerClassName="row g-5">
              <Cart items={items} cant_items={items.length}  totalPagar={CalcularTotalPagar}/>
              <Invoicing handleChange={handleChange} handleChangeCheckInputs={handleChangeCheckInputs} handleSubmit={handleSubmit}  {...Form}/>
            </DivComponent>
          </CheckoutFrame>
        </Frame>:<Redirect
            to="auth"
        />)
}

export default Buy;
