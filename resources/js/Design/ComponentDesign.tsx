import styled from 'styled-components'
import { motion } from 'framer-motion'
import {InertiaLink, Link} from '@inertiajs/inertia-react';

const MenuIconStyled = styled(motion.div)`
    .css-i4bv87-MuiSvgIcon-root {
        font-size: 3.5rem;
        color: lightblue;
        border: 1px solid lightblue;
        padding: 10px;
        border-radius: 50%;
        transition: .5s;
    }


    .css-i4bv87-MuiSvgIcon-root:hover {
        color: blue;
        border: 3px solid blue;
    }
`;



const LinkStyled = styled(Link)<{ active: any }>`
    display: inline-flex;
    align-items: center;
    border-bottom: 2px solid blueviolet;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
    color: ${(props) => props.active && "cyan"}

`;


export { MenuIconStyled, LinkStyled }
