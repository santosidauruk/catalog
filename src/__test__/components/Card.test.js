import React from 'react'
import renderer from 'react-test-renderer'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Card } from '../../components/common'

const data = {
    id: 1,
    name: 'Unbranded Wooden Chips',
    slug: 'unbranded-wooden-chips',
    rate: 2,
    price: '9837178',
    images: [
        'https://picsum.photos/420/320?image=31',
        'https://picsum.photos/420/320?image=69',
        'https://picsum.photos/420/320?image=181',
    ],
    can_be_tried: false,
    description:
        'Vitae sint perspiciatis rerum saepe. Id ipsa aperiam expedita sit sint soluta rem aut asperiores. Facere magnam perspiciatis.',
    stocks: {
        colors: ['violet', 'cyan'],
        sizes: ['M', 'XL', 'M'],
    },
}

describe('<Card/> testing', () => {
    it('should rendered correctly', () => {
        const component = renderer.create(
            <BrowserRouter>
                <Card data={data} />
            </BrowserRouter>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
