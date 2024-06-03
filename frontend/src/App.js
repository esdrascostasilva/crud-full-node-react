import Form from "./components/Form";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Grid from "./components/Grid.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() { 

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
  
    const res = await axios.get("http://localhost:8800/users");
    setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <h1>Users</h1>
        <Form />
        <Grid users={users} />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
