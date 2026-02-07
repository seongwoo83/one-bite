import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			gcTime: 5 * 60 * 1000, // 메모리에서 실질적으로 캐시를 삭제하는 시간
			refetchOnMount: true,
			refetchInterval: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<App />
		</QueryClientProvider>
	</BrowserRouter>,
);
