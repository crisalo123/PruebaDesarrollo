import axios from "axios";



 const axiosCustomer = axios.create({
    baseURL: 'https://fakestoreapi.com',
     headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000,
})


export default axiosCustomer;