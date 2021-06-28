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
        </ProgressBar>
    );
};

const ProgressBar = Styled.div`
background: #eee;
width: 100%;
height: 40px;
`;
const HighLight = Styled.div`
background:orange;
height: 100%;
width: ${props => props.width};
transition: width 1s ease-in-out;
`;

export default Progress;
