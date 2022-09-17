import styled from 'styled-components'

const ModalWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    justify-content: center;
    display: flex;
    align-items: center;
    z-index: 999999999;
`;

const ModalContent = styled.div`
    padding: 20px;
    width: 420px;
    height: 500px;
    background: #fff;
    border-radius: 20px;
    position: relative;

    .footer {
        position: absolute;
        bottom: 15px;
        right: 20px;
    }
`;


export {ModalWrapper, ModalContent}
