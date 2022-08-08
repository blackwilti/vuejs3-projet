/*import Axios from "./caller.service"
import login from '@/views/auth/login'


export const accountService = {
    login, logout, saveToken, isLogged
}

let login = (Credential) => {
    return Axios.post('/auth/login', Credential)
}

let logout = () => {
    localStorage.removeItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !! token
} */