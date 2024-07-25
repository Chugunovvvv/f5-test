import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import LOGIN_MUTATION from "../apollo/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";
import { ILoginMutationData, ILoginMutationVars } from "../types";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { loading, error }] = useMutation<
    ILoginMutationData,
    ILoginMutationVars
  >(LOGIN_MUTATION);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const { data } = await login({ variables: { email, password } });
      if (data && data.login.accessToken) {
        dispatch(setToken(data?.login.accessToken));
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={loading}
      >
        Login
      </Button>
      {error && <Typography color="error">Error logging in</Typography>}
    </Container>
  );
};

export default Login;
