"use client";

import { useRef } from "react";
import RoundedButton from "@/app/components/RoundedButton";
import BorderedContainer from "../../BorderedContainer";

const size = 28;

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    const value = ref.current!.value;

    // router.push(`/home/anime/${value.replaceAll(" ", "_")}`);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <BorderedContainer className="py-1 relative">
        <input
          ref={ref}
          type="search"
          className="w-full h-full ps-4 pe-8 text-white bg-transparent rounded-2xl"
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
