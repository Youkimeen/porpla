import styled from 'styled-components'

const NavigationContainer = styled.div`

    .menu {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 10px;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggle {
        position: absolute;
        width: 60px;
        height: 60px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0px 4px rgba(0, 0, 0, 0.15);
        font-size: 2em;
        transition: transform 1.25s;
        transform: scale(0.8);
    }

    .toggle:hover {
        transform: scale(1.0);
    }

    .menu.active .toggle {
        transform: rotate(135deg);
    }

`;

const LiStyled = styled.li<{ i: number, menu: boolean }>`
    position: absolute;
    left: 0;
    list-style: none;
    transform-origin: 100px;
    transition: transform 0.5s;
    transition-delay: calc(0.1s * ${({ i }) => i});
    transform: rotate(0deg) translateX(83px);
    ${({menu, i} ) => menu && `
     transform: rotate(calc(360deg / 8 * ${i}))};
    `};
`;

const AStyled = styled.a<{ i:number }>`
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    ${({i}) => `
     transform: rotate(calc(360deg / -8 * ${i}))
     `}
`;

const CardStyled = styled.div<{ width: number, height: number }>`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    .header {
        font-size: large;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid lightgray;

    }
`

export {　NavigationContainer, LiStyled, AStyled, CardStyled }
