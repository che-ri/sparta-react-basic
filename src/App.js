import React from "react";
import Styled from "styled-components";
import HW1 from "./HW/HW1";
import "./App.scss";

const Container = Styled.div`
width:100%;
height: 100vh;
`;

const App = () => {
    return (
        <Container>
            <HW1 />
        </Container>
    );
};

export default App;
