import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ()=>{

    const {idItem}=useParams()

    return (<div class="card">
              <div class="card-body">
                This is some text within a card body.
              </div>
            </div>)
}

export default Detail;