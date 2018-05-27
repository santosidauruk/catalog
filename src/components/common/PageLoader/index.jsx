import React from 'react'

import { PageLoaderWrapper } from './style'

const PageLoader = () => (
    <PageLoaderWrapper className="columns is-centered is-flex">
        <span className="icon is-large">
            <i className="fa fa-circle-o-notch fa-pulse fa-2x has-text-danger" />
        </span>
    </PageLoaderWrapper>
)

export default PageLoader
