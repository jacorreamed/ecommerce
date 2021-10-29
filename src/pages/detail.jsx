import React from 'react'
import { useParams } from 'react-router-dom'
const Detail = ()=>{
    const [idItem]=useParams()
    return (<h1>Hola mundo para producto {idItem}</h1>)
}

export default Detail;