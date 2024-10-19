import React from 'react'
import axios from "./utils/Axios"

const App = () => {
  const getProducts = async () =>{
    try {
      const response = await axios.get('/products')
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>hello</h1>
      <button onClick={getProducts}>Get Products</button>

    </div>
  )
}

export default App