"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { jikan } from "@/app/services/jikan";

const Home = () => {
  const jikanQuery = useSuspenseInfiniteQuery(jikan(["home", "now"]));

  console.log(jikanQuery);

  return <></>;
};

export default Home;
