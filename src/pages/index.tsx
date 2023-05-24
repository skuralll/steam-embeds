import Head from "next/head";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <>
      <Head>
        <title>SteamEmbeds</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card />
      </main>
    </>
  );
}
