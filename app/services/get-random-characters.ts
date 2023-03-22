import fs from "fs";
import path from "path";
import { getCharacterById, getEpisodeById } from "./api";
import type { CardProps } from "~/components/Card";

const DATA_PATH = path.resolve("public/data/random-characters.json");
const CHARACTERS_COUNT = 826;
const MAX_CHARACTERS = 6;
const getIdFromUrl = (url: string) => +(url.split("/")?.at(-1) ?? 1);

const getRandomGroupOfCharacters = async (): Promise<CardProps[]> => {
  const charactersToFetch = [...Array(MAX_CHARACTERS)].map(() => Math.floor(Math.random() * CHARACTERS_COUNT));
  const characters = await getCharacterById(charactersToFetch);

  const episodesToFetch = characters.map((character) => getIdFromUrl(character.episode[0]));
  const episodes: Episode[] = await getEpisodeById(episodesToFetch);

  const getEpisodeFromUrl = (url: string): CardProps["episode"] => {
    const id = getIdFromUrl(url);
    const episode = episodes.find((episode) => id === episode.id);

    return episode ? { name: episode.name, url: episode.url } : undefined;
  };

  return characters.map((character): CardProps => {
    const { id, name, species, status, location, image, url } = character;
    const episode = getEpisodeFromUrl(character.episode[0]);

    return { id, name, status, species, location, image, episode, url };
  });
};

getRandomGroupOfCharacters()
  .then((res) => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(res, null, 2)}\n`, "utf-8");
  })
  .catch((err) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const info = `GET ${err.url} - ${err.status} ${err.statusText}`;
    const message = (err.data as string).replace(/\n+/g, " ").replace(/\s+$/, "");

    console.error(`${message}. ${info}`);
    process.exit(1);
  });
