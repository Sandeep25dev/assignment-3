import React from "react";
import ItemList from "./components/ItemList";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Item List</h1>
        <p>
          Completed items are filled in green and incomplete ones are filled
          with red
        </p>
      </TextContainer>
      <ItemList />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  color: #000000;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding: 15px 0;
  background-color: #f5f5f5;
  border-radius: 10px;
  p {
    font-size: large;
  }
`;
