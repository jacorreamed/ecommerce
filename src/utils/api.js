export const getProducts  = (limit) => {
  
    return fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=0`)
      .then(res=>res.json()) //res.json retorna una promesa también
      .then(data=>{
        console.log(data)
        return data
      }).catch(e=>{
        console.log(e)
        return []
      })

}