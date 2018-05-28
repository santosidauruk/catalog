import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { RadioInput, Rate } from '../../common'
import CardImage from './CardImage'
import CardMedia from './CardMedia'
import { CardContent } from './style'

class Card extends Component {
    state = {
        isBuying: false,
        stocksStatus: {},
    }
    componentDidMount() {
        const stocksStatus = {}
        Object.keys(this.props.data.stocks)
            .filter((item) => this.props.data.stocks[item].length > 0)
            .map((item) => (stocksStatus[item] = false))

        this.setState({ stocksStatus })
    }

    _handleRadioInput = (radioItem) => {
        const stocksStatus = {
            ...this.state.stocksStatus,
            [radioItem]: true,
        }
        this.setState({ stocksStatus })
    }

    _checkAllObjectValue = (obj) => {
        for (let o in obj) {
            if (!obj[o]) return false
        }

        return true
    }

    render() {
        const { data, detailed } = this.props
        return (
            <div className="card" style={{ margin: '1rem' }}>
                <CardImage
                    imgSrc={data.images}
                    imgName={data.name}
                    canBeTried={data.can_be_tried}
                    slug={data.slug}
                    hasSlider={detailed}
                />
                <div className="card-content is-paddingless">
                    <CardMedia className="media" data={data} hasDescription={detailed} />
                    {/* If user click 'Beli', show the input */}
                    <CardContent>
                        {this.state.isBuying ? (
                            <div className="notification">
                                <button
                                    className="delete"
                                    onClick={() => this.setState({ isBuying: false })}
                                />
                                <RadioInput
                                    title="Warna yang bisa kamu pilih"
                                    inputs={data.stocks.colors}
                                    name="productColor"
                                    onChange={() => this._handleRadioInput('colors')}
                                />
                                {data.stocks.sizes.length > 0 && (
                                    <RadioInput
                                        title="Size yang bisa kamu pilih"
                                        inputs={data.stocks.sizes}
                                        name="productSize"
                                        onChange={() => this._handleRadioInput('sizes')}
                                    />
                                )}
                                <button
                                    className="button is-danger"
                                    disabled={
                                        this._checkAllObjectValue(this.state.stocksStatus)
                                            ? false
                                            : true
                                    }>
                                    Beli
                                </button>
                            </div>
                        ) : (
                            <React.Fragment>
                                <Rate countOfStars={data.rate} />
                                <button
                                    className="button is-danger"
                                    onClick={() => this.setState({ isBuying: true })}>
                                    Beli
                                </button>
                            </React.Fragment>
                        )}
                    </CardContent>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        can_be_tried: PropTypes.bool,
        images: PropTypes.array,
        name: PropTypes.string,
        price: PropTypes.string,
        rate: PropTypes.number,
        slug: PropTypes.string,
        stocks: PropTypes.object,
    }),
    detailed: PropTypes.bool,
}

export default Card
