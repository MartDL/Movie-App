// api URLSearchParams
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "@/config";
// basic fetch
import { basicFetch } from "@/api/fetchFuctions";
// types
import type { NextApiRequest, NextApiResponse } from "next";
import type { Movies } from "../../api/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search } = req.query; // grb search params

  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}

export const fetchMovies = async (search = "", page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
