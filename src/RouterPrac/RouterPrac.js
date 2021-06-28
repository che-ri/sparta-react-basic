import React from "react";

import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux"; //리덕스

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";

// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두개를 가져올게요!
import { loadBucket, createBucket } from "../redux/modules/bucket";

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateToProps = state => ({
    bucket_list: state.bucket.list,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = dispatch => ({
    load: () => {
        dispatch(loadBucket());
    },
    create: new_item => {
        dispatch(createBucket(new_item));
    },
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class RouterPrac extends React.Component {
    constructor(props) {
        super(props);
        // App 컴포넌트의 state를 정의해줍니다.
        this.state = {};
        // ref는 이렇게 선언합니다!
        this.text = React.createRef();
    }

    componentDidMount() {
        console.log("마운트가 끝났다!");
    }

    addBucketList = () => {
        const new_item = this.text.current.value;
        this.props.create(new_item);
        this.text.current.value = "";
    };

    // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
    render() {
        return (
            <>
                <Container>
                    <Title>내 버킷리스트</Title>
                    <Progress />
                    <Line />
                    {/* 컴포넌트를 넣어줍니다. */}
                    {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
                    {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={props => (
                                <BucketList history={props.history} />
                            )}
                        />
                        <Route
                            path="/detail/:index"
                            render={props => (
                                <Detail
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route
                            render={props => (
                                <NotFound history={props.history} />
                            )}
                        />
                    </Switch>
                </Container>
                {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
                <Input>
                    <input type="text" ref={this.text} />
                    <button onClick={this.addBucketList}>추가하기</button>
                </Input>
                <button
                    onClick={() => {
                        //scrollTo의 옵션을 사용합니다. behavior옵션의 smooth를 사용하면 매끄럽게 스크롤이 됩니다!
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    위로가기
                </button>
            </>
        );
    }
}

const Input = styled.div`
    max-width: 350px;
    min-height: 10vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Title = styled.h1`
    color: slateblue;
    text-align: center;
`;

const Line = styled.hr`
    margin: 16px 0px;
    border: 1px dotted #ddd;
`;
// withRouter 적용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RouterPrac));
