import React from 'react'
import Header from './header/index.js'

const Frame = (props)=>{
    return <div className="container">{(props.renderHeader)?props.renderHeader:(<Header  amount={props.cant_items}></Header>)}{props.children}</div>
}
export default Frame