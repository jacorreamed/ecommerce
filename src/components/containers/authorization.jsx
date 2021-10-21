import React,{useState,useEffect,createRef} from 'react'
import jwt_decode from 'jwt-decode';
import Frame from "../views/frame";
import SingleHeader from "../views/singleHeader";
import Selector from "../views/auth/selector"
import SignIn from "../views/auth/signin"
import {setSession} from "../../utils/localStorage"
import default_user from '../../img/default-user.svg'

const Authorization = ()=>{

    const LoginButtonRef = createRef();
    const [typeAction,setTypeAction] = useState("signin");

    const [Form,setForm] = useState({
      email:"",
      password:""
    });


    const handleChange = (e)=>{

      setForm({...Form,[e.target.name]:e.target.value})
    }

    const handleClick = (type)=>{
      setTypeAction(type)
    }

    const handleCredentialResponse = (data)=>{
      //console.log(data.credential);

      if(data.credential){

        const decode_token = jwt_decode(data.credential);

        setSession({
          email: decode_token.email,
          name: decode_token.name,
          picture: decode_token.picture
        });

      }else{
        data.preventDefault()

        setSession({
          email: Form.email,
          name: "",
          picture: default_user
        });

      }
      

      window.location.href = "buy"

      //guardamos los datos de la sesion en sessionStorage
    }

    useEffect(() =>{

      window.google.accounts.id.initialize({
        client_id: '209857278123-nrlqej2c9uffo5bot6l2npg2mme7fgch.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });

      window.google.accounts.id.renderButton(LoginButtonRef.current,{});
      //google.accounts.id.prompt();
    },[])

    
    return (
        <Frame renderHeader={<SingleHeader/>}>
          <Selector handleClick={handleClick}/>
          <SignIn
            typeAction={typeAction}
            loginButtonRef={LoginButtonRef}
            form={Form}
            handleChange={handleChange}
            handleCredentialResponse ={handleCredentialResponse}
          />
        </Frame>
    )
}

export default Authorization;