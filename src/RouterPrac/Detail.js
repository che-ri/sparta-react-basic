// 리액트 패키지를 불러옵니다.
import React from "react";
import Styled from "styled-components";
// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteBucket, completeBucket } from "../redux/modules/bucket";

const Detail = props => {
    const dispatch = useDispatch();

    // 스토어에서 상태값 가져오기
    const bucket_list = useSelector(state => state.bucket.list);
    // url 파라미터에서 인덱스 가져오기
    let bucket_index = parseInt(props.match.params.index);
    return (
        <div>
            <h1
                style={{
                    overflowX: "auto",
                    width: "100%",
                    color: "rgba(0,0,0,.9)",
                }}
            >
                {bucket_list[bucket_index].text}
            </h1>
            <Btn
                onClick={() => {
                    //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
                    // 예를 들면 이렇게요.
                    dispatch(deleteBucket(bucket_index));
                    props.history.push("/");
                }}
            >
                삭제하기
            </Btn>
            <Btn
                onClick={() => {
                    dispatch(completeBucket(bucket_index));
                    props.history.goBack();
                }}
            >
                완료하기
            </Btn>
        </div>
    );
};

const Btn = Styled.button`
        padding: 5px;
        width: 25%;
        color: #fff;
        background-color: #ff2768;
        border: 1px solid #ff2768;
        border-radius: 5px;
        &:not(:last-child){
            margin-right:10px;
        }
`;

export default Detail;
