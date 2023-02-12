import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <Header />
      <main {...props} />
      <Footer />
    </>
  );
}
