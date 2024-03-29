import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
