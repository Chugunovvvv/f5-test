import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// baseurl
const httpLink = createHttpLink({
  uri: "https://dev.proplan.work/graphql",
});

// Устанавливаем ссылку авторизации для добавления токена в заголовки запросов
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Объединяем ссылки авторизации и baseurl
  cache: new InMemoryCache(), // Используем InMemoryCache для кэширования запросов
});

export default client;
