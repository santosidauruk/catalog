import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import Carousel from 'nuka-carousel'

import Lightbox from 'react-image-lightbox'

import { CardImageContent } from './style'

class CardImage extends Component {
    state = {
        isWished: false,
        isZoomed: false,
    }

    toggleProductWish = () => {
        this.setState((prevState) => ({
            isWished: !prevState.isWished,
        }))
    }

    render() {
        const { imgSrc, imgName, canBeTried, slug, hasSlider } = this.props
        return (
            <CardImageContent className="card-image">
                {/* If user is in product detail page, run slider
                    If not, just show the first image */}
                <figure className="image is-4by3">
                    {hasSlider ? (
                        <Carousel>
                            {imgSrc.map((item) => <img src={item} alt={imgName} key={item} />)}
                        </Carousel>
                    ) : (
                        <img src={imgSrc[0]} alt={imgName} />
                    )}
                </figure>
                <span
                    className={`icon wish is-medium ${
                        this.state.isWished ? 'has-text-danger' : ''
                    }`}
                    onClick={this.toggleProductWish}>
                    <i className="fa fa-heart" />
                </span>
                {/* If user is not in the product detail page, dont show the zoom icon */}
                {!hasSlider && (
                    <React.Fragment>
                        <span
                            className="icon zoom"
                            onClick={() => this.setState({ isZoomed: true })}>
                            <i className="fa fa-plus" />
                        </span>
                        <Link to={`/${slug}`} className="card-link" />
                    </React.Fragment>
                )}
                {this.state.isZoomed && (
                    <Lightbox
                        mainSrc={imgSrc[0]}
                        onCloseRequest={() => this.setState({ isZoomed: false })}
                    />
                )}
                {canBeTried && <span className="tag is-light">Bisa Dicoba</span>}
            </CardImageContent>
        )
    }
}

export default CardImage
