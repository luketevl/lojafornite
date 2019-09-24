const API_URL = process.env.REACT_APP_API || 'http://localhost:8081/api/'
const storeNow = async () => {
  console.log(2)
  const data = await fetch(`${API_URL}fornite/shop/now`)
  console.log(3, data)
  const result = await data.json()
  console.log(4)
  return result
}

export default {
  storeNow
}