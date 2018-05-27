import React, { Component } from 'react'
import { Card } from '../../common'

import { getProductData } from '../../../utils/api'

import { ContentWrapper } from '../style'

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
        if (window.pageYOffset >= this.wrapper.offsetHeight - 1200 && !this.state.loading) {
            this.getProductList()
        }
    }

    _renderLoadingSpinner = () => (
        <div className="columns is-centered">
            <span className="icon is-large">
                <i className="fa fa-circle-o-notch fa-pulse fa-2x has-text-danger" />
            </span>
        </div>
    )

    render() {
        return (
            <React.Fragment>
                <ContentWrapper innerRef={(wrapper) => (this.wrapper = wrapper)}>
                    {this.state.product.map((item) => <Card key={item.id} data={item} />)}
                    {this.state.page > 1 && this.state.loading && this._renderLoadingSpinner()}
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

export default ProductList
