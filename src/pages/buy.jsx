import React,{useEffect,useState,useContext} from 'react'
import {Navigate,useNavigate} from 'react-router-dom';
import CheckoutFrame from 'components/checkout/checkoutframe'
import {useSigleProduct} from 'hooks/useProducts'
import Cart from 'components/checkout/cart'
import Invoicing from 'components/checkout/Invoicing';
import DivComponent from 'components/divComponent'; //stateless component
import Frame from 'components/frame'
import {getItems, getSession} from 'utils/localStorage'
import {productContext} from 'state/globalState'


const Buy = ()=>{

  const navigate = useNavigate()
  const [session,setSession]=useState(getSession()); //TODO: crear un custom hook para manejar la sesión


  const [shoppingCarState, dispatch] = useContext(productContext);

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

  let product = false;
  console.log("shoppingCarState.shoppingCar.length",shoppingCarState.shoppingCar[0]);
  if(shoppingCarState.shoppingCar.length)
  product = useSigleProduct(shoppingCarState.shoppingCar[0].prod_id);
  

  useEffect(() => {
    //if(!getSession())

  },[])

  const CalcularTotalPagar = (()=>{
    if(product.loading)
    return 0
    let total = [product].reduce((prev,curr)=>prev+curr.price,0)
    return total*shoppingCarState.shoppingCar[0].cantidad
  })()


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
  console.log("hola",product);

  return( 
        session?
        !product.loading?
        <Frame cant_items={0}>
          <CheckoutFrame>
            <DivComponent innerClassName="row g-5">
              <Cart items={[product]} cant_items={shoppingCarState.shoppingCar[0].cantidad}  totalPagar={CalcularTotalPagar}/>
              <Invoicing handleChange={handleChange} handleChangeCheckInputs={handleChangeCheckInputs} handleSubmit={handleSubmit}  {...Form}/>
            </DivComponent>
          </CheckoutFrame>
        </Frame>:<h1>Cargando...</h1>:<Navigate
            to="/auth"
        />)
}

export default Buy;
