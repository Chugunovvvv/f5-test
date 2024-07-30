import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import LOGIN_MUTATION from "../apollo/login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/authSlice";
import { ILoginMutationData, ILoginMutationVars } from "../types";
import { RootState } from "../store/store";
import ErrorMessage from "./ErrorMessage";

const Login: React.FC = () => {
  // стейты для логина и пароля
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<string>("");
  const [login, { loading }] = useMutation<
    ILoginMutationData,
    ILoginMutationVars
  >(LOGIN_MUTATION);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);
  // если токен есть, то направляем на главную страницу
  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  // функция для обработки логина и пароля
  const handleLogin = async () => {
    try {
      // выполняем мутацию с введенным логином и паролем
      const { data } = await login({ variables: { email, password } });
      // если ответ содержит токен доступа, то записываем его в редакс и отправляем на главную страницу
      if (data && data.login.accessToken) {
        dispatch(setToken(data?.login.accessToken));
        navigate("/", { replace: true });
      }
    } catch (err) {
      setIsError(err.message);
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
      <ErrorMessage error={isError} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={loading}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
