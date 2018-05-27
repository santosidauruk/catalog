import styled from 'styled-components'

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 1.5rem 1.5rem 1.5rem;
    .rate {
        .rate__checked {
            color: orange;
        }
    }
    .notification {
        width: 100%;
        .radio-input {
            margin-bottom: 1em;
        }
    }
`

// export const CardMediaWrapper = styled.div`
//     position: relative;
//     padding: 1.5rem 1.5rem 0 1.5rem;
//     > .tag {
//         position: absolute;
//         right: 1.5rem !important;
//         bottom: auto !important;
//         top: 1.5rem !important;
//     }
// `

export const CardImageContent = styled.div`
    position: relative;

    > .icon {
        z-index: 2;
        &.wish {
            position: absolute;
            top: 0;
            right: 0;
            transition: 0.1s all;
        }
        &.zoom {
            position: absolute;
            right: 0.5rem;
            bottom: 0.5rem;
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            border-radius: 3px;
        }
    }

    > .tag {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
    }
`
