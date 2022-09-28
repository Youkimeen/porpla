import styled from 'styled-components'
import {motion} from "framer-motion";

const ButtonStyled = styled(motion.button)<{
    width: number, height: number, color: string, bgColor: string
}>`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    color: ${({color}) => color};
    background: ${({bgColor}) => bgColor};
    opacity: 0.8;
    border-radius: 10px;
    margin: 5px;

    &:hover {
        opacity: 1;
    }
`;

export { ButtonStyled }
