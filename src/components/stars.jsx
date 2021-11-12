import React from 'react'
import { v4 as uuidv4} from 'uuid';

const Stars = ({fill}) =><div className="my-2">{ new Array(5).fill(uuidv4()).map(
    (curr,star)=><i key={star} className={`bi bi-star${((star+1)<=fill)?"-fill":""}`}></i>
)}</div>

export default Stars