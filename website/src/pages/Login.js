import React from "react";
import styled from "styled-components";
import { mobile } from "../response";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f1de;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #81b29a;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0px;
  padding: 6px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 6px;
  cursor: pointer;
  background-color: #f4f1de;
  margin: 10px 0px 20px 0px;
`;

const Link = styled.div`
  margin: 5px 0px;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>FORGET PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
