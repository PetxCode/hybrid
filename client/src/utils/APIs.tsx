import axios from "axios"
import { iTask } from "./interfaces"

const url: string = "http://localhost:2277/api/todo"


export const getTodo = async () => {
    try {
        return await axios.get(url).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createTask = async (data: any) => {
    try {
        return await axios.post(`${url}/create`, data)
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = async (id: string, data: any) => {
    try {
        return await axios.patch(`${url}/update/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}