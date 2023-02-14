import Introduction, { attributes as introductionAttr } from "../../docs/introduction.mdx";
import Character, { attributes as characterAttr } from "../../docs/character.mdx";
import Location, { attributes as locationAttr } from "../../docs/location.mdx";
import Episode, { attributes as episodeAttr } from "../../docs/episode.mdx";
import { json, LoaderFunction, MetaFunction, TypedResponse } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Key = keyof typeof Documentation;

interface Data {
  slug: Key;
}

const Documentation = {
  introduction: { Component: Introduction, attributes: introductionAttr },
  character: { Component: Character, attributes: characterAttr },
  location: { Component: Location, attributes: locationAttr },
  episode: { Component: Episode, attributes: episodeAttr },
};

export default function $slug() {
  const { slug } = useLoaderData<Data>();

  const { Component } = Documentation[slug];

  return <Component />;
}

export const loader: LoaderFunction = ({ params }): TypedResponse<Data> => {
  const slug = (params.slug ?? "") as Key;

  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (!(slug in Documentation)) throw new Response("Not Found", { status: 404 });

  return json({ slug });
};

export const meta: MetaFunction = ({ params }) => {
  const data = params.slug && params.slug in Documentation ? Documentation[params.slug as Key].attributes : {};

  return {
    title: data.title ? `${data.title as string} - Documentation` : "Documentation",
    description:
      "This documentation will help you get familiar with the resources of the Rick and Morty API and show you how to make different queries.",
  };
};
