import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { jikan } from "@/app/services/jikan";
import Home from "./_pages/Home";

type Props = {
  params: {
    slug: string[];
  };
};

const Page = ({ params }: Props) => {
  const queryClient = getQueryClient();
  let content = <></>;

  if (params.slug[0] === "home" && params.slug[1] === "now") {
    void queryClient.prefetchQuery(jikan(["home", "now"]));
    content = <Home />;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {content}
    </HydrationBoundary>
  );
};

export default Page;
