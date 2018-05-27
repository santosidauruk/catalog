import styled from 'styled-components'

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rate {
        .rate__checked {
            color: orange;
        }
    }
`

export const CardMedia = styled.div`
    position: relative;
    > .tag {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`

export const CardImageContent = styled.div`
    position: relative;

    > .icon.wish {
        position: absolute;
        top: 0;
        right: 0;
        transition: 0.1s all;
    }
`
