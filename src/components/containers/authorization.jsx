import React,{useState} from 'react'
import Frame from "../views/frame";
import SingleHeader from "../views/singleHeader";
import Selector from "../views/auth/selector"
import SignIn from "../views/auth/signin"

const Authorization = ()=>{
    const [typeAction,setTypeAction] = useState("signin");

    const responseGoogle = (response) => {
      console.log(response);
    }

    const handleClick = (type)=>{
      console.log(type)
      setTypeAction(type)
    }
    
    
    return (
        <Frame renderHeader={<SingleHeader/>}>
          <Selector handleClick={handleClick}/>
          <SignIn responseGoogle={responseGoogle} typeAction={typeAction}/>
        </Frame>
    )
}

export default Authorization;