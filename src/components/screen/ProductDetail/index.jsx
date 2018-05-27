import React, { Component } from 'react'
import { Card, PageLoader } from '../../common'

import { ContentWrapper } from '../style'

import { getProductDetail } from '../../../utils/api'

class ProductDetail extends Component {
    state = {
        detail: [],
    }

    async componentDidMount() {
        const detail = await getProductDetail(this.props.match.params.productSlug)
        if (detail.status === 200) {
            this.setState({
                detail: detail.data,
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.detail.length > 0 ? (
                    <ContentWrapper>
                        <Card detailed data={this.state.detail[0]} />
                    </ContentWrapper>
                ) : (
                    <PageLoader />
                )}
            </React.Fragment>
        )
    }
}

export default ProductDetail
