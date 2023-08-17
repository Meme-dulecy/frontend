import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SocketProvider from "./components/SockerProvider";
import Loading from "./components/Loading";
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <SocketProvider>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </CookiesProvider>
    </SocketProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
