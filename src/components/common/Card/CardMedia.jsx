import React from 'react'

const CardMedia = ({ data, hasDescription }) => (
    <div className="media">
        <div className="media-content">
            <p className="title is-6">{data.name}</p>
            <p className="subtitle is-6">Rp {data.price}</p>
            {hasDescription && <p>{data.description}</p>}
        </div>
        {data.stocks.sizes.length > 0 && (
            <span className="tag is-light">{data.stocks.sizes.join(', ')}</span>
        )}
    </div>
)

export default CardMedia
