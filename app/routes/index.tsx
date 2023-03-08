import { json, type LoaderFunction, type TypedResponse } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card, { type CardProps } from "~/components/Card";
import { Hero } from "~/icons/Hero";
import characters from "public/data/random-characters.json";

interface HomeLoaderData {
  characters: CardProps[];
}

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
  return json({
    characters,
  });
};
