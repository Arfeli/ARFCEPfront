import axios from 'axios'
import { Noticias } from './Notices'

const API = 'http://localhost:5000'

export const getVideos = async() => {
    return await axios.get<Noticias[]>(`${API}/videos`)
}
export const createVideo = async(video: Noticias) => {
    return await axios.post(`${API}/videos`, video)
}
export const getVideo = async(id: string) => {
    return await axios.get<Noticias>(`${API}/videos/${id}`)
}
export const updateVideo = async(id: string, video: Noticias) => {
    return await axios.put<Noticias>(`${API}/videos/${id}` , video)
}
export const deleteVideo = async(id: string) => {
    return await axios.delete<Noticias>(`${API}/videos/${id}`)
}