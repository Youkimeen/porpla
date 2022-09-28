import styled from 'styled-components'

const SelectStyled = styled.select<{width: number, height: number, borderRadius: number, color: string, bgColor: string}>`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    border-radius: ${({borderRadius}) => borderRadius}px;
    color: ${({color}) => color};
    background: ${({bgColor}) => bgColor};
    border: none;
    padding: 3px;
    text-align: center;
    display: inline-block;

    &:focus {
        outline:none;
    }
`;

export { SelectStyled }
