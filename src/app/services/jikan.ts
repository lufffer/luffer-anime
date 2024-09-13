import { Animes } from "@/app/types/jikan";
import { QueryKey } from "@tanstack/react-query";

const selectEndpoint = (page: unknown, endpoint: unknown, query: unknown) => {
  let url = "";

  switch (page) {
    case "home":
      {
        switch (endpoint) {
          case "now":
            url = process.env.NEXT_PUBLIC_JIKAN_NOW!;
            break;
          case "upcoming":
            url = process.env.NEXT_PUBLIC_JIKAN_UPCOMING!;
            break;
          case "top":
            url = process.env.NEXT_PUBLIC_JIKAN_TOP!;
            break;
          case "top airing":
            url = process.env.NEXT_PUBLIC_JIKAN_TOP_AIRING!;
            break;
          case "anime":
            url = process.env.NEXT_PUBLIC_JIKAN_ANIMES!;
            break;
          case "favorites":
            return null;
        }
      }
      break;
  }

  url = url.replace("{{page}}", "1").replace("{{q}}", query as string);

  return url;
};

const jikan = (queryKey: QueryKey) => {
  const url = selectEndpoint(queryKey[0], queryKey[1], queryKey[2]);

  return {
    queryKey,
    queryFn: async () => {
      const response = await fetch(url!);

      return response.json();
    },
    initialPageParam: 1,
    getNextPageParam: (data: Animes) => {
      return data?.pagination?.has_next_page
        ? data.pagination.current_page + 1
        : undefined;
    },
    enabled: queryKey[1] !== "anime" ? true : queryKey[2] !== "" ? true : false,
  };
};

export { jikan };
