import React from "react";
import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component {
    constructor(props) {
        super(props);
        // state에 필요한 데이터를 넣어줘요!
        this.state = {
            name: "스파르타 코딩 클럽",
            page: "quiz",
            scoreMsg:
                "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)",
            list: [
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
                { question: "르탄이는 2살이다.", answer: "O" },
            ],
            ranking: [
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
                { rank: 1, name: "임민영", message: "안녕 르탄아!" },
            ],
        };
    }

    render() {
        const { name, scoreMsg, page, list } = this.state;
        return (
            <div className="App">
                {/* 조건부 랜더링을 합니다 / state의 page를 바꿔가면서 확인해봐요! */}
                {page === "quiz" && <Quiz list={list} />}
                {page === "start" && <Start name={name} />}
                {page === "score" && <Score name={name} scoreMsg={scoreMsg} />}
            </div>
        );
    }
}

export default App;
