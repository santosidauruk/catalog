import getProductDetail from '../../utils/api/getProductDetail'
import getProductData from '../../utils/api/getProductData'

describe('API fetch using async/await', () => {
    it('getProductDetail() should load detail of product', async () => {
        const response = await getProductDetail('small-plastic-soap')
        expect(response).toBeDefined()
        expect(Array.isArray(response.data)).toBe(true)
    })

    it('getProductData() should load list product', async () => {
        const response = await getProductData(1, 6)
        expect(response).toBeDefined()
        expect(Array.isArray(response.data)).toBe(true)
    })
})
