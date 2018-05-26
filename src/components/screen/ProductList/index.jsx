import React, { Component } from 'react'
import { Card } from '../../common'

import { ProductListWrapper } from './style'

class ProductList extends Component {
    state = {
        product: [
            {
                id: 1,
                name: 'baju 1',
                harga: '9.000',
                desc: 'ini baju 1 asdsadas asda',
                rate: 3,
                stocks: {
                    color: [],
                    size: ['S', 'M'],
                },
            },
            {
                id: 2,
                name: 'baju 2',
                harga: '123.213',
                desc: 'ini baju 22 asdsadas asda',
                rate: 4,
                stocks: {
                    color: [],
                },
            },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <ProductListWrapper>
                    {this.state.product.map((item) => <Card key={item.id} data={item} />)}
                </ProductListWrapper>
            </React.Fragment>
        )
    }
}

export default ProductList
