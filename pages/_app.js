import "../styles/custom.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
