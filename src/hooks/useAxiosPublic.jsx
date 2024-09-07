import axios from "axios"

const axiosPublic = axios.create({
    baseURL: "https://i-bos-e-commerce-server.vercel.app/",
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic