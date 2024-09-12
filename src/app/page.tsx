import { getQueryClient } from "../get-query-client";
import { jikan } from "../services/jikan";

export default function Home(params) {
  const queryClient = getQueryClient();

  if (params.params === {}) {
    void queryClient.prefetchQuery(jikan(["now"]));
  }

  console.log(params);

  return <></>;
}
