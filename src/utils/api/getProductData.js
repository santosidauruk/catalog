import axios from 'axios'

const apiURL = 'http://192.168.1.23:8888/v1/'
const productDataURL = apiURL + 'product'

const getProductData = (page, limit) => {
    return axios
        .get(`${productDataURL}?_page=${page}&_limit=${limit}`)
        .then((response) => response)
        .catch((err) => err.response)
}

export default getProductData
