import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProductList } from './screen'
import '../styles/main.css'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ProductList} />
                {/* <Route path="/:productName" component={DetailProduct} /> */}
            </Switch>
        )
    }
}

export default App
