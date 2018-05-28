import { Maybe } from './helper'

const getSisa = (val) => val.length % 3

const getRibuan = (val) => val.substr(getSisa(val)).match(/\d{3}/g)

const removeDot = (val) => val.split('.').join('')

const convertToCurr = ({ val, subVal }) => {
    const ribuan = getRibuan(val)

    if (ribuan) {
        let separator = getSisa(val) ? '.' : ''
        subVal += separator + ribuan.join('.')
    }

    return subVal
}

const autoThousand = (val) =>
    Maybe.of(val)
        .map((val) => val.toString())
        .map(removeDot)
        .map((val) =>
            Object.create({
                val,
                subVal: val.substr(0, getSisa(val)),
            })
        )
        .map(convertToCurr)
        .orJust('')

export default autoThousand
