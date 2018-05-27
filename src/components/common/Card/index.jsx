import React, { Component } from 'react'

import { RadioInput, Rate } from '../../common'
import CardImage from './CardImage'
import CardMedia from './CardMedia'
import { CardContent } from './style'

class Card extends Component {
    state = {
        isBuying: false,
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
                                />
                                {data.stocks.sizes.length > 0 && (
                                    <RadioInput
                                        title="Size yang bisa kamu pilih"
                                        inputs={data.stocks.sizes}
                                        name="productSize"
                                    />
                                )}
                                <button className="button is-danger">Beli</button>
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

Card.defaultProps = {
    data: {},
}
export default Card
