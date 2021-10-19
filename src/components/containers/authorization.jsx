import React,{useState,useEffect} from 'react'
import jwt_decode from 'jwt-decode';
import Frame from "../views/frame";
import SingleHeader from "../views/singleHeader";
import Selector from "../views/auth/selector"
import SignIn from "../views/auth/signin"

const Authorization = ()=>{
    const [typeAction,setTypeAction] = useState("signin");

    const LoginButtonRef = React.createRef();

    const handleClick = (type)=>{
      console.log(type)
      setTypeAction(type)
    }

    const handleCredentialResponse = (data)=>{
      //console.log(data.credential);

      const decode_token = jwt_decode(data.credential);

      console.log(jwt_decode(data.credential));

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
          <SignIn typeAction={typeAction}  loginButtonRef={LoginButtonRef}/>
        </Frame>
    )
}

export default Authorization;