import styled from 'styled-components'

const ChatWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
`;

const GroupWrapper = styled.div`
    max-width: 60%;
    height: auto;
    padding: 10px 14px;
    background: #eee;
    border-radius: 10px;
    transition: .5s;
    margin: 0 auto;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

`;


export { ChatWrapper, GroupWrapper }
