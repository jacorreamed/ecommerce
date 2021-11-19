import React,{useEffect,useState} from 'react'
import { Navigate,useSearchParams} from 'react-router-dom';
import CheckoutFrame from 'components/checkout/checkoutframe'
import Cart from 'components/checkout/cart'
import Invoicing from 'components/checkout/Invoicing';
import DivComponent from 'components/divComponent'; //stateless component
import Frame from 'components/frame'
import {getItems, getSession} from 'utils/localStorage'


const Buy = ()=>{

  const [session,setSession]=useState(getSession()); //TODO: crear un custom hook para manejar la sesión
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("cant"))


  const [Form,setForm] = React.useState({
    firstName: session.name,
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

  

  useEffect(() => {
    //if(!getSession())

  },[])

  const CalcularTotalPagar = (()=>{
    return getItems().reduce((prev,curr)=>prev+curr.price,0)
  })()

  const items = getItems() //TODO: esto se debería mover al frame


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
              {/*<Cart items={items} cant_items={items.length}  totalPagar={CalcularTotalPagar}/>*/}
              <Invoicing handleChange={handleChange} handleChangeCheckInputs={handleChangeCheckInputs} handleSubmit={handleSubmit}  {...Form}/>
            </DivComponent>
          </CheckoutFrame>
        </Frame>:<Navigate
            to="/auth"
        />)
}

export default Buy;
