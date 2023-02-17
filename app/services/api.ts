import axios from "redaxios";

const api = axios.create({ baseURL: "https://therickandmortyapi.vercel.app/api" });

interface EnpointById<T> {
  (id: string): Promise<T>;
  (id: number[]): Promise<T[]>;
}

const createGetEndpointById = <T>(endpoint: string): EnpointById<T> => {
  return async (id) => {
    const res = await api.get(`/${endpoint}/${typeof id === "string" ? id : id.join(",")}`);

    return res.data;
  };
};

export const getEpisodeById = createGetEndpointById<Episode>("episode");

export const getCharacterById = createGetEndpointById<Character>("character");
