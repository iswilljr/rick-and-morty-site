import { MetaFunction } from "@remix-run/node";
import { Hero } from "~/icons/Hero";

export default function Home() {
  return (
    <>
      <section className="relative flex justify-center items-center md:h-[50vh] min-h-[285px] text-center py-2 px-5">
        <h1 className="text-dark z-10 text-6xl md:text-8xl font-black">The Rick and Morty API</h1>
        <div className="absolute w-full h-full">
          <Hero />
        </div>
      </section>
      <section className="flex justify-center items-center min-h-[calc(50vh-60px)] px-5 py-20 bg-section"></section>
    </>
  );
}

export const meta: MetaFunction = () => ({
  title: "The Rick And Morty API",
});
