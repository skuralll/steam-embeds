import Head from "next/head";
import Card from "@/components/card/card";
import { PlayedGameData } from "@/model/game";
import { PlayerSummary } from "@/model/player";
import { getOwnedGames, getPlayerSummary } from "@/lib/steamapi";

type Props = {
  summary: PlayerSummary;
  games: PlayedGameData[];
};

export default function Home(props: Props) {
  const title = "Most Played Games";

  const avatar = props.summary ? props.summary.avatarfull : "";
  const username = props.summary ? props.summary.personaname : "";

  return (
    <>
      <Head>
        <title>SteamEmbeds</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card title={title} player={props.summary} games={props.games} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const steamid = "76561198424303465";

  const props: Props = {
    summary: await getPlayerSummary(steamid),
    games: (await getOwnedGames(steamid)).slice(0, 8),
  };

  return { props: props };
}
