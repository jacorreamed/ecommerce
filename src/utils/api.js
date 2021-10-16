export const getProducts  = (limit) => {
    
    return fetch(`https://fakestoreapi.com/products/?limit=${limit}`)
      .then(res=>res.json()) //res.json retorna una promesa también
      .then(data=>{
        console.log(data)
        return data
      }).catch(e=>{
        console.log(e)
        return []
      })

}