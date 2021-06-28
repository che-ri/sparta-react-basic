// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

// redux hook을 불러옵니다.
import { useSelector } from "react-redux";

const BucketList = props => {
    // 버킷리스트를 리덕스 훅으로 가져오기
    const bucket_list = useSelector(state => state.bucket.list);

    return (
        <ListStyle>
            {bucket_list.map((list, index) => {
                return (
                    <ItemStyle
                        className="list_item"
                        key={index}
                        completed={list.complete}
                        onClick={() => {
                            // 배열의 몇번째 항목을 눌렀는 지, url 파라미터로 넘겨줍니다.
                            props.history.push("/detail/" + index);
                        }}
                    >
                        {list.text}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 50vh; */
    overflow-x: hidden;
    /* overflow-y: auto; */
`;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px 0;
    width: 100%;
    min-height: 20px;
    overflow-x: auto;
    font-weight: 600;
    color: ${props => (props.completed ? "white" : "rgba(0,0,0,.7)")};
    background-color: ${props => (props.completed ? "#ff2768" : "aliceblue")};
`;

export default BucketList;
