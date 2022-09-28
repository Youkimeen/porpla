import styled, {keyframes} from 'styled-components'

const guestAnimation = keyframes`
    0% {transform: translate(0%, 0%); transform: scale(1.0)}
    50% {transform: translate(20%, -10%); transform: scale(1.9)}
    0% {transform: translate(0%, 0%); transform: scale(1.0)}
`;


export { guestAnimation }
