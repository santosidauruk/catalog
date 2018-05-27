import axios from 'axios'
import { productDataURL } from '../../constants/api'

const getProductDetail = (slug) => {
    return axios
        .get(`${productDataURL}/${slug}`)
        .then((response) => response)
        .catch((err) => err.response)
}

export default getProductDetail
