import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { jikan } from "@/app/services/jikan";
import Home from "./pages/Home/";

type Props = {
  params: {
    slug: string[];
  };
};

const Page = ({ params }: Props) => {
  const slug = params.slug;
  const queryClient = getQueryClient();
  let content = <></>;

  if (slug[0] === "home") {
    if (slug[1] === "now") {
      void queryClient.prefetchInfiniteQuery(jikan(["home", "now"]));
    } else if (slug[1] === "anime") {
      void queryClient.prefetchInfiniteQuery(jikan(["home", "anime"]));
    }

    content = <Home />;
  }

  return <HydrationBoundary state={dehydrate(queryClient)}>{content}</HydrationBoundary>;
};

export default Page;
