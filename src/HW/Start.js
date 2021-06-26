import React from "react";
import Styled from "styled-components";

const Start = ({ name }) => {
    const Span = Styled.span`
    background:#feca57;
    border-radius:50%;
    padding:11px;
    color:white;
    transition:all ease;
    &:hover{
        color:rgba(0,0,0,.5);
    }
    `;
    return <Span>{name}</Span>;
};
export default Start;
