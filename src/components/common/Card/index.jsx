import React, { Component } from 'react'
import CardImage from './CardImage'

import { CardContent, CardMedia } from './style'

const Card = ({ data }) => (
    <div className="card" style={{ margin: '1rem' }}>
        {/* <CardImage className="card-image">
            <figure className="image is-4by3">
                <img src={data.images[0]} alt={data.name} />
            </figure>
            <span className="icon wish is-medium" onClick={() => }>
                <i className="fa fa-heart" />
            </span>
        </CardImage> */}
        <CardImage imgSrc={data.images} imgName={data.name} />
        <div className="card-content">
            <CardMedia className="media">
                <div className="media-content">
                    <p className="title is-4">{data.name}</p>
                    <p className="subtitle is-6">Rp {data.price}</p>
                </div>
                {/* {data.stocks.size && (
                    <span className="tag is-light">{data.stocks.size.join(', ')}</span>
                )} */}
            </CardMedia>

            <CardContent>
                <div className="rate">
                    {Array.apply(null, { length: 5 })
                        .map(Number.call, Number)
                        .map((v, index) => (
                            <span
                                key={index}
                                className={`fa fa-star ${
                                    index + 1 <= data.rate ? 'rate__checked' : ''
                                }`}
                            />
                        ))}
                </div>
                <a className="button is-danger">Beli</a>
            </CardContent>
        </div>
    </div>
)

export default Card
