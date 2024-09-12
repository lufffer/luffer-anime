import { Animes } from "@/app/types/jikan";

const selectEndpoint = (page: string, endpoint: string, query: string) => {
  let url = "";

  switch (page) {
    case "home":
      {
        switch (endpoint) {
          case "now":
            url = process.env.NEXT_PUBLIC_JIKAN_NOW!.replaceAll(
              "{{page}}",
              "1",
            );
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
            url =
              process.env.NEXT_PUBLIC_JIKAN_ANIME! +
              (query ? "/" + query + "&page=" : "");
            break;
          case "favorites":
            return null;
        }
      }
      break;
  }

  return url;
};

const jikan = (queryKey: string[]) => {
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
  };
};

export { jikan };
