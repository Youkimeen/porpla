import styled, {keyframes} from 'styled-components';
import { guestAnimation } from "./Animation";
import { motion } from "framer-motion";


const GuestScreen = styled(motion.div)`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;

    h1 {
      font-weight: bold;
        font-size: x-large;
        text-align: center;
    }

    .background_color {
        position: relative;
        min-height: 100vh;
        width: 100%;
        filter: blur(100px);
    }

    .deepskyblue {
        position: absolute;
        top: 0;
        left: 0;
        background: deepskyblue;
        z-index: -3;
        animation: ${guestAnimation} 5s ease 0s infinite;
    }

    .royalblue {
        position: absolute;
        bottom: 20%;
        left: 15rem;
        background: royalblue;
        z-index: -2;
        animation: ${guestAnimation} 9s ease 4s infinite;
    }

    .lime {
        position: absolute;
        bottom: 0;
        right: 10rem;
        background: lime;
        z-index: -1;
        animation: ${guestAnimation} 6s ease 8s infinite;
    }

    @media (min-width: 640px) {
        justify-content: center;
        padding-top: 0;

        .deepskyblue {
            width: 100vw;
            height: 40vh;
        }

        .royalblue {
            width: 50vw;
            height: 50vh;
        }

        .lime {
            width: 40vw;
            height: 50vh;
        }
    }
`;

const MoveColorBall = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: blueviolet;
`;

const GuestForm = styled(motion.div)`
    position: absolute;
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 3px solid rgba(255, 255, 255, 0);
    border-bottom: 3px solid rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
    z-index: 1;

    @media (min-width: 640px) {
        max-width: 28rem;
        border-radius: 0.5rem;
    }
`;

const AuthenticatedScreen = styled(motion.div)`
    max-height: 100vh;
    position:fixed;
    top:0;
    left: 0;
    width: 100vw;
    display: flex;
    background: linear-gradient(to bottom, #006DB0, #70C8FF);

    .main {
        max-width: 80%;
        height: 100vh;
        background: white;
        overflow-y: scroll;
        overflow-x: scroll;
    }
`;

const AuthenticatedNavigation = styled(motion.nav)`
    min-height: 100vh;
    width: 20%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    margin-top: 10px;

    @media (min-width: 640px) {
        max-width: 30%;
    }
`;


export {
    GuestScreen,
    GuestForm,
    AuthenticatedScreen,
    AuthenticatedNavigation,
    MoveColorBall
} ;
