import React from 'react'

const RadioInput = ({ inputs, name, title, onChange }) => (
    <div className="radio-input">
        <p>{title}:</p>
        <div className="control">
            {inputs.map((item, index) => (
                <label className="radio" key={index}>
                    <input type="radio" name={name} onChange={onChange} />
                    {item}
                </label>
            ))}
        </div>
    </div>
)

export default RadioInput
