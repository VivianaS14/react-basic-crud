import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000"
})

export const getUsers = async () => {
    let res = await api.get("/users")
    return res
}

export const getUserDetail = async (_id) => {
    let res = await api.get(`/users/${_id}`)
    return res
}

export const createUser = async (_newUser) => {
    let res = await api.post("/users", _newUser)
    return res
}
