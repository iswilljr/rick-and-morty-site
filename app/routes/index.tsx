import { json, type LoaderFunction, type TypedResponse } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card, { type CardProps } from "~/components/Card";
import { Hero } from "~/icons/Hero";
import { getCharacterById, getEpisodeById } from "~/services/api";

interface HomeLoaderData {
  characters: CardProps[];
}

const CHARACTERS_COUNT = 826;
const MAX_CHARACTERS = 6;
const getIdFromUrl = (url: string) => +(url.split("/")?.at(-1) ?? 1);

export default function Home() {
  const { characters } = useLoaderData<HomeLoaderData>();

  return (
    <>
      <section className="relative flex justify-center items-center md:h-[50vh] min-h-[285px] text-center py-2 px-5">
        <h1 className="text-dark z-10 text-6xl md:text-8xl font-black">The Rick and Morty API</h1>
        <div className="absolute w-full h-full">
          <Hero />
        </div>
      </section>
      <section className="flex justify-center items-center min-h-[calc(50vh-60px)] p-6 lg:py-20 bg-section">
        <div className="flex flex-wrap justify-center items-center max-w-[2000px]">
          {characters.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </section>
    </>
  );
}

export const loader: LoaderFunction = async (): Promise<TypedResponse<HomeLoaderData>> => {
  try {
    const charactersToFetch = [...Array(MAX_CHARACTERS)].map(() => Math.floor(Math.random() * CHARACTERS_COUNT));
    const characters = await getCharacterById(charactersToFetch);

    const episodesToFetch = characters.map((character) => getIdFromUrl(character.episode[0]));
    const episodes: Episode[] = await getEpisodeById(episodesToFetch);

    const getEpisodeFromUrl = (url: string) => {
      const id = getIdFromUrl(url);
      return episodes.find((episode) => id === episode.id);
    };

    return json({
      characters: characters.map((character) => ({ ...character, episode: getEpisodeFromUrl(character.episode[0]) })),
    });
  } catch (error) {
    return json({ characters: [] });
  }
};

export const prerender = async () => {
  return {
    context: { characters: [] },
  };
};
