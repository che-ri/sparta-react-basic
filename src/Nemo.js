import React from "react";

const Nemo = props => {
    // count에는 state 값이, setCount는 count라는 state 값을 수정하는 함수가 될거예요.
    // useState(초기값): () 안에 초기값을 넣어줍니다.
    const [count, setCount] = React.useState(3);

    const addNemo = () => {
        // setCount를 통해 count에 저장된 값을 + 1 해줍니다.
        setCount(count + 1);
    };

    const removeNemo = () => {
        // setCount를 통해 count에 저장된 값을 - 1 해줍니다.
        // 이번엔 if문 대신 삼항 연산자로 해볼거예요!
        setCount(count > 0 ? count - 1 : 0);
    };

    const nemo_count = Array.from({ length: count }, (v, i) => i);
    // 반환할 리액트 요소가 없을 때는 null을 넘겨주세요!
    return (
        <div className="App">
            {nemo_count.map(idx => (
                <div
                    key={idx}
                    style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: "#ddd",
                        margin: "10px",
                    }}
                >
                    nemo
                </div>
            ))}

            <div>
                {/* 함수를 호출합니다. */}
                <button onClick={addNemo}>하나 추가</button>
                <button onClick={removeNemo}>하나 빼기</button>
            </div>
        </div>
    );
};

export default Nemo;
