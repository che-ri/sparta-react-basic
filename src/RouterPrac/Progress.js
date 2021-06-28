import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Progress = props => {
    const bucket_list = useSelector(state => state.bucket.list);
    const listLength = bucket_list.length;
    const completedLength = bucket_list.filter(ele => ele.complete).length;
    const range = Math.round((completedLength / listLength) * 100) + "%";

    return (
        <ProgressBar>
            <HighLight width={range} />
            <Dot />
        </ProgressBar>
    );
};

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;
const HighLight = styled.div`
    background: #ff2768;
    height: 100%;
    width: ${props => props.width};
    transition: width 1s ease-in-out;
    border-radius: 10px;
`;

const Dot = styled.div`
    margin-left: -10px;
    background: #fff;
    border: 5px solid #ff2768;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export default Progress;
