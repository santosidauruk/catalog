import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProductList, ProductDetail, NotFound } from './screen'
import '../styles/main.css'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/:productSlug" component={ProductDetail} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default App
