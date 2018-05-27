import React, { Component } from 'react'
import { Card } from '../../common'

import { getProductData } from '../../../utils/api'

import { ProductListWrapper } from './style'

class ProductList extends Component {
    state = {
        page: 1,
        product: [],
        loading: false,
    }

    componentDidMount() {
        this.getProductList()
        window.addEventListener('scroll', this._handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll)
    }

    getProductList = async () => {
        this.setState({ loading: true })
        const list = await getProductData(this.state.page, 6)
        if (list.status === 200) {
            this.setState((prevState) => ({
                product: [...prevState.product, ...list.data],
                page: prevState.page + 1,
                loading: false,
            }))
        }
    }
    _handleScroll = () => {
        if (window.pageYOffset >= this.wrapper.offsetHeight - 1000 && !this.state.loading) {
            console.log('get dong')
            this.getProductList()
        }
    }

    render() {
        return (
            <React.Fragment>
                <ProductListWrapper innerRef={(wrapper) => (this.wrapper = wrapper)}>
                    {this.state.product.map((item) => <Card key={item.id} data={item} />)}
                </ProductListWrapper>
            </React.Fragment>
        )
    }
}

export default ProductList
