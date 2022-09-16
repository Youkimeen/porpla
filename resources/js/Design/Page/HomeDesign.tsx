import styled from 'styled-components'

const HomeHeaderWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    border: 1px solid lightgray;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #006DB0;

    .icon {
        font-size: 1.5em;
    }

    .search {
        width: 260px;
        height: 40px;
        border: 1px solid #fff;
        background: #0065A3;
        text-align: center;
        border-radius: 50px;
        color: #fff;
    }

    .search:focus {
        outline: none;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

`;

const HomeWrapper = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 30px;
    margin: 50px;
    overflow-y: scroll;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export { HomeWrapper, HomeHeaderWrapper }
