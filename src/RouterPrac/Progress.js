import React from "react";
import Styled from "styled-components";

import { useSelector } from "react-redux";

const Progress = props => {
    const bucket_list = useSelector(state => state.bucket.list);
    const listLength = bucket_list.length;
    const completedLength = bucket_list.filter(ele => ele.completed).length;
    const range = Math.round((completedLength / listLength) * 100) + "%";

    return (
        <ProgressBar>
            <HighLight width={range} />
            <Dot />
        </ProgressBar>
    );
};

const ProgressBar = Styled.div`
background: #eee;
width: 100%;
height: 20px;
display:flex;
align-items:center;
border-radius:10px;
`;
const HighLight = Styled.div`
background:#FF2768;
height: 100%;
width: ${props => props.width};
transition: width 1s ease-in-out;
border-radius:10px;
`;

const Dot = Styled.div`
margin-left:-15px;
background: #fff;
border:5px solid #FF2768;
box-sizing:border-box;
width: 30px;
height: 30px;
border-radius:50%;
`;

export default Progress;
