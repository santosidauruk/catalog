import React, { Component } from 'react'

import { CardImageContent } from './style'

class CardImage extends Component {
    state = {
        wish: false,
    }

    toggleProductWish = () => {
        this.setState((prevState) => ({
            wish: !prevState.wish,
        }))
    }

    render() {
        const { imgSrc, imgName } = this.props
        return (
            <CardImageContent className="card-image">
                <figure className="image is-4by3">
                    <img src={imgSrc[0]} alt={imgName} />
                </figure>
                <span
                    className={`icon wish is-medium ${this.state.wish ? 'has-text-danger' : ''}`}
                    onClick={this.toggleProductWish}>
                    <i className="fa fa-heart" />
                </span>
            </CardImageContent>
        )
    }
}

export default CardImage
