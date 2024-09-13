"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import Main from "@/app/components/Main";
import Title from "@/app/components/Title";
import { jikan } from "@/app/services/jikan";
import { useHash } from "@/app/hooks/useHash";

const Home = () => {
  const queryClient = getQueryClient();
  const queryCache = queryClient.getQueryCache();
  const queryKeys = queryCache.getAll().map((cache) => cache.queryKey)[0];
  const jikanQuery = useSuspenseInfiniteQuery(jikan(queryKeys));
  const hash = useHash();

  const pages = jikanQuery.data.pages;
  const currentPage = Math.floor(hash / 25) + 1;
  const index = hash % 25;

  const anime = pages[currentPage - 1].data[index];
  const title = anime.title;

  return (
    <Main>
      <Title>{title}</Title>
    </Main>
  );
};

export default Home;
