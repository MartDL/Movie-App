import { useInfiniteQuery } from "@tanstack/react-query";
// fetch function
import { fetchMovies } from "@/pages/api/movies";

// types
import { Movies } from "@/pages/api/types";

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(
    ["movies", search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
