import { useQuery } from "@tanstack/react-query";

export function useExampleQuery() {
  return useQuery({
    queryKey: ["example"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 500));
      return { message: "Hello from React Query!" };
    },
  });
}
