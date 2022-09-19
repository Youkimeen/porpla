import styled from 'styled-components'
import { motion } from "framer-motion";

const TimelineWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
`;

const RightTimelineWrapper = styled.div`
    flex: 0.6;
    width: 100%;
    height: 100px;
`;

const LeftTimelineWrapper = styled.div`
    flex: 0.3;
    max-width: 100%;
    height: 100px;
`

const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em 2em;
`

const LeftHeader = styled.div`
    width: 20%;
    height: 100%;

`;

const RightHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
`

const CreateWrapper = styled(motion.div)`
    width: 700px;
    max-height: 400px;
    background: linear-gradient(170deg, #006DB0 43%, #70C8FF 100%);
    margin-left: 15px;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
`;

const CreateHeader = styled.div`
    width: 100%;
    height: 60px;
    padding: 10px;
    border-bottom: 0.5px solid blue;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        width: 130px;
        height: 100%;
    }

    .title input {
        background: transparent;
        border: none;
        color: white;
        display: flex;
        height: 100%;
        font-weight: bold;

        &:focus {
            outline: none;
            border: none;
        }

        ::placeholder {
            color: whitesmoke
        }
    }

    .info {
        width: 300px;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .channel {
        display: block;
    }

    .avatar {
        width: 45px;
        height: 45px;
        border-radius: 10px;
    }
`;

const CreateTextArea = styled.textarea`
    color: white;
    width: 100%;
    height: 250px;
    background: transparent;
    border: none;
    resize: none;
    outline: none;
    border-bottom: 0.2px solid slategray;

    &:focus {
        border:none;
        outline: none;
        border-bottom: 0.2px solid blue;
    }

    ::placeholder {
        color:  whitesmoke;
    }
`;

const CreateButtonZone = styled.div`
    width: 100%;
    text-align: right;
    justify-content: right;
    height: auto;
    padding: 10px;
    display: flex;
`;

const dropIn = {
    hidden: {
        y: "100vh",
        opacity: 0
    },
    visible: {
        y: "20vh",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

const MenuWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    flex: 0.2;
`;

const PostComponent = styled.div`
    width: 90%;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 13px;
    background: whitesmoke;
    display: flex;
    justify-content: space-evenly;

    .left {
        flex: 0.2;
        border-right: 1px solid powderblue;
    }

    .avatar {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin: 0 auto;
    }

    .right {
        width: 100%;
        flex: 0.8;
        margin: 0 auto;
        padding: 0 14px;
    }

    .title {
        margin-top: 0;
    }

    .date {
        color: gray;
    }
`;


export {
    TimelineWrapper,
    RightTimelineWrapper,
    LeftTimelineWrapper,
    HeaderWrapper,
    CreateWrapper,
    CreateHeader,
    CreateTextArea,
    CreateButtonZone,
    dropIn,
    LeftHeader,
    RightHeader,
    MenuWrapper,
    PostComponent
}
