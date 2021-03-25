import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

/**
 * 获取所有Notes
 * @returns {Promise<AxiosResponse<any>>}
 */
const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}
/**
 * 创建Note
 * @param newObject
 * @returns {Promise<AxiosResponse<any>>}
 */
const create = newObject => {
    return axios
        .post(baseUrl, newObject)
        .then(response => response.data)
}

const update = (id, newObject) => {
    return axios
        .put(`${baseUrl}/${id}`, newObject)
        .then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
}
