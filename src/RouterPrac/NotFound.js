import React from "react";

const NotFound = props => {
    return (
        <>
            <h1>페이지를 찾을 수 없어요!</h1>
            <button
                onClick={() => {
                    props.history.goBack();
                }}
            >
                뒤로가기
            </button>
        </>
    );
};

export default NotFound;
