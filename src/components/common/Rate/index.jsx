import React from 'react'

const Rate = ({ countOfStars }) => (
    <div className="rate">
        {Array.apply(null, { length: 5 })
            .map(Number.call, Number)
            .map((v, index) => (
                <span
                    key={index}
                    className={`fa fa-star ${index + 1 <= countOfStars ? 'rate__checked' : ''}`}
                />
            ))}
    </div>
)

export default Rate
