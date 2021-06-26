import React, { useState } from "react";
import Start from "./Start";
import img from "./scc_img01.png";
import Styled from "styled-components";

const Container = Styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
justify-content:center;
align-items:center;

input{
    border-radius:20px;
    padding:10px;
    width:300px;
    margin-bottom:20px;
    outline:none;
    border:2px solid rgba(0,0,0,.7);
}
button{
    border-radius:20px;
    padding:10px;
    width:100px;
    border:none;
    background:#feca57;
    cursor:pointer;
    color:white;
    font-weight:600;
    &:hover{
        color:rgba(0,0,0,.5);
    }
}
`;

const Img = Styled.img`
width:200px;
height:200px;
`;

const HW1 = () => {
    const [name, setName] = useState("cheri");
    return (
        <Container>
            <Img src={img} alt="rtan" />
            <h1>
                나는 <Start name={name} />에 대해 얼마나 알고 있을까?
            </h1>
            <input type="text" placeholder="내 이름" />
            <button>시작하기</button>
        </Container>
    );
};

export default HW1;
