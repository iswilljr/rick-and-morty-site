interface Base {
  id: number;
  name: string;
  url: string;
  created: string;
}

interface Character extends Base {
  id: number;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

interface Episode extends Base {
  id: number;
  air_date: string;
  episode: string;
  characters: string[];
}

interface ApiLocation extends Base {
  id: 1;
  type: string;
  dimension: string;
  residents: string[];
}

interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next?: string | null;
    prev?: string | null;
  };
  results: T[];
}
