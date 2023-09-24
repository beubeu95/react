//Navigate : Route로 설정된 특정 페이지로 이동
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Login = ({ authenticated, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };
  if (authenticated) return <Navigate to="/login" replace={true} />;
  return (
    <>
      <h1>Login</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          이메일
        </InputGroup.Text>
        <Form.Control
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          type="text"
          placeholder="email"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          비밀번호
        </InputGroup.Text>
        <Form.Control
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type="password"
          placeholder="password"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <div className="d-grid gap-2">
      <Button variant="secondary" size="lg" onClick={handleClick}>
        LOGIN
      </Button>
    </div>
    </>
  );
};

export default Login;