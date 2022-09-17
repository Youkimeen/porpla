import styled from "styled-components"


const PersonWrapper = styled.div`
    display: flex;
    max-width: 100%;
    padding: 15px;
    justify-content: space-around;
`;


const ProfileWrapper = styled.div`
    width: 500px;
    min-height: 500px;
    background: whitesmoke;
    margin: 50px 0;
    position: relative;
    border-radius: 20px;
    padding: 40px 20px 10px 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    .avatar {
        border-radius: 50%;
        width: 75px;
        height: 75px;
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
    }

    .profile_header {
        max-width: 530px;
        height: 150px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    h1 {
        display: inline-block;
    }

    .button {
        background: #fff;
        padding: 5px 13px;
        border: 1px lightgray solid;
        border-radius: 10px;
        align-items: center;
        text-align: center;
        justify-content: center;
        position: absolute;
        font-size: medium;
        display: flex;

        .icon {
            font-size: large;
        }
    }

    .profile_public_info {

    }

    .profile_personal_info {

    }
`;


const PersonRightWrapper = styled.div`
    width: 500px;
    height: auto;
`;

const GroupWrapper = styled.div`
    width: 500px;
    height: auto;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items:center;

`

const MenuWrapper = styled.div`
    width: 500px;
    height: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const IconWrapper = styled.div`
    width: 100%;
    height: auto;

    .icon_with_notification {
        display: inline-block;
        position: relative;
    }

    .icon {
        font-size: xx-large;
    }

    .number_of_notification {
        position: absolute;
        top: -5px;
        right: -5px;
        width: 20px;
        height: 20px;
        background-color: cyan;
        border-radius: 50%;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: small;
        color: #fff;
    }
`;




export { ProfileWrapper, GroupWrapper, PersonWrapper, PersonRightWrapper, MenuWrapper, IconWrapper }
