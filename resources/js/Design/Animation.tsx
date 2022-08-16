import styled, {keyframes} from 'styled-components'

const guestAnimation = keyframes`
    0% {transform: translate(0%, 0%); transform: scale(1.0)}
    50% {transform: translate(20%, -10%); transform: scale(1.9)}
    0% {transform: translate(0%, 0%); transform: scale(1.0)}
`;

const guestMotionAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5
        }
    }
}
 

export { guestAnimation, guestMotionAnimation }
