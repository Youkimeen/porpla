import styled from 'styled-components'
import IonIcon from '@reacticons/ionicons'
import { Link } from '@inertiajs/inertia-react'


const SidebarContainer = styled.div`
    width: 100%;
    padding-left: 5px;
`;

const OptionContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 55px;
`;

const Option = styled(Link)<{currentUrl: Boolean}>`
    position: relative;
    width: 100%;
    display: flex;
    margin: 20px 0;
    color: ${({currentUrl}) => currentUrl ? "#2563eb": "white"};
    align-items: center;
    transition: transform 1s;
    background-color: ${({currentUrl}) => currentUrl ? "white": "transparent"};
    border-bottom-left-radius: ${({currentUrl}) => currentUrl ? "28px" : ""};
    border-top-left-radius: ${({currentUrl}) => currentUrl ? "28px": ""};

    &::before {
      ${({currentUrl}) => currentUrl && `
         content: '';
         position: absolute;
         right: 0;
         top: -50px;
         width: 50px;
         height: 50px;
         background:transparent;
         border-radius: 50%;
         box-shadow: 35px 35px 0 10px white;
      `}
    }

    &::after {
      ${({currentUrl}) => currentUrl && `
         content: '';
         position: absolute;
         right: 0;
         bottom: -50px;
         width: 50px;
         height: 50px;
         background:transparent;
         border-radius: 50%;
         box-shadow: 35px -35px 0 10px white;
        `}
    }


    &:hover {
        background-color: white;
        border-bottom-left-radius: 28px;
        border-top-left-radius: 28px;
        color: #2563eb;

        .icon {
            transform: rotate(360deg);
        }
    }

    &:hover::before {
        content: '';
        position: absolute;
        right: 0;
        top: -50px;
        width: 50px;
        height: 50px;
        background:transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 10px white;
    }

    &:hover::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -50px;
        width: 50px;
        height: 50px;
        background:transparent;
        border-radius: 50%;
        box-shadow: 35px -35px 0 10px white;
    }

`;

const IonIconStyled = styled(IonIcon)`
    margin-right: 25px;
    font-size: 1.5rem;
    padding: 15px;
    position: relative;
    border-radius: 50%;
    transition: transform 1s;

    &:hover {
        transform: rotate(360deg);
    }
`


export {SidebarContainer, OptionContainer, Option, IonIconStyled}
