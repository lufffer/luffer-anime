"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { jikan } from "@/app/services/jikan";

const Home = () => {
  const jikanQuery = useSuspenseQuery(jikan(["home", "now"]));

  return;
};

export default Home;
