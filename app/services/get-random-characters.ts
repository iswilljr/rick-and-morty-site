import fs from "fs";
import path from "path";
import { getCharacterById, getEpisodeById } from "./api";

const DATA_PATH = path.resolve("public/data/random-characters.json");
const CHARACTERS_COUNT = 826;
const MAX_CHARACTERS = 6;
const getIdFromUrl = (url: string) => +(url.split("/")?.at(-1) ?? 1);

const getRandomGroupOfCharacters = async () => {
  const charactersToFetch = [...Array(MAX_CHARACTERS)].map(() => Math.floor(Math.random() * CHARACTERS_COUNT));
  const characters = await getCharacterById(charactersToFetch);

  const episodesToFetch = characters.map((character) => getIdFromUrl(character.episode[0]));
  const episodes: Episode[] = await getEpisodeById(episodesToFetch);

  const getEpisodeFromUrl = (url: string) => {
    const id = getIdFromUrl(url);
    return episodes.find((episode) => id === episode.id);
  };

  return characters.map((character) => ({ ...character, episode: getEpisodeFromUrl(character.episode[0]) }));
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
getRandomGroupOfCharacters().then((res) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(res, null, 2), "utf-8");
});
