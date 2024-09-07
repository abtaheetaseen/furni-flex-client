import axios from "axios"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const axiosPrivate = axios.create({
    baseURL: "https://i-bos-e-commerce-server.vercel.app",
})

const useAxiosPrivate = () => {

    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    axiosPrivate.interceptors.request.use((config) => {
        const token =localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    })


    axiosPrivate.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status
        if(status === 401 || status === 403){
            await logOut();
            navigate("/")
        }
        return Promise.reject(error);
    })

  return axiosPrivate;
}

export default useAxiosPrivate
