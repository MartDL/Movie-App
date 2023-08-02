export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budger: number;
  runtime: number;
  revenue: number;
  release_date: string;
};

export type Movies = {
  page: number;
  result: Movie[];
  total_pages: number;
  total_results: number;
};
