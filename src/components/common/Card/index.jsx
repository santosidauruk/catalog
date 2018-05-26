import React, { Component } from 'react'

import { CardContent, CardMedia } from './style'

const Card = ({ data }) => (
    <div className="card" style={{ margin: '1rem' }}>
        <div className="card-image">
            <figure className="image is-4by3">
                <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image1"
                />
            </figure>
        </div>
        <div className="card-content">
            <CardMedia className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder image2"
                        />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{data.name}</p>
                    <p className="subtitle is-6">{data.harga}</p>
                </div>
                {data.stocks.size && (
                    <span className="tag is-light">{data.stocks.size.join(', ')}</span>
                )}
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
                <a className="button is-danger">Danger</a>
            </CardContent>
        </div>
    </div>
)

export default Card
