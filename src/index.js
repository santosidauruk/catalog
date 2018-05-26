import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './utils/functions/registerServiceWorker'
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
registerServiceWorker()
