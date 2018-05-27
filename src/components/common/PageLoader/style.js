import styled from 'styled-components'

export const PageLoaderWrapper = styled.div`
    position: fixed;
    padding-top: 2em;
    background: white;
    background: white;
    z-index: 999998;
    transition: transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
    will-change: transform;
    /* transform: translateY(-100%); */
    transform: translateY(0);
    width: 100%;
    height: 100%;
    align-items: center;
    &.is-active {
    }
`
