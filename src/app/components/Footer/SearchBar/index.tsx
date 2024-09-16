"use client";

import { useRef, useState } from "react";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { jikan } from "@/app/services/jikan";
import { getQueryClient } from "@/app/get-query-client";
import RoundedButton from "@/app/components/RoundedButton";
import BorderedContainer from "@/app/components/BorderedContainer";

const size = 28;

const SearchBar = () => {
  const queryClient = getQueryClient();
  const queryCache = queryClient.getQueryCache();
  const queryKeys = queryCache.getAll().map((cache) => cache.queryKey)[0];
  const [query, setQuery] = useState(queryKeys);
  query ? useSuspenseInfiniteQuery(jikan(query)) : undefined;

  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const input = ref.current!;
    const value = input.value;
    const processed = value.replaceAll(" ", "_");
    const url = `${window.location.origin}/home/anime/${processed}#0`;

    window.history.replaceState(null, "", url);
    window.dispatchEvent(new HashChangeEvent("hashchange"));

    setQuery(["home", "anime", value]);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <BorderedContainer className="relative">
        <input
          ref={ref}
          type="search"
          className="w-full h-full py-1 ps-4 pe-8 text-white bg-transparent rounded-2xl"
        />
        <RoundedButton
          className="absolute top-1/2 right-0 -translate-y-1/2"
          onClick={handleClick}
        >
          <img src="/search.svg" width={size} height={size} />
        </RoundedButton>
      </BorderedContainer>
    </form>
  );
};

export default SearchBar;
