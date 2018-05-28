import React from 'react'
import renderer from 'react-test-renderer'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import App from '../components/App'

describe('App testing', () => {
    it('should rendered correctly', () => {
        const component = renderer.create(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
