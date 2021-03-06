import axios from 'axios'
import { productDataURL } from '../../constants/api'

const getProductData = (page, limit) => {
    return axios
        .get(`${productDataURL}?_page=${page}&_limit=${limit}`)
        .then((response) => response)
        .catch((err) => err.response)
}

export default getProductData
