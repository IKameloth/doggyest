import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_DOGS_API
})

export default AxiosConfig