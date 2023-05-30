import Head from "next/head";
import Card from "@/components/card/card";
import { PlayedGameData } from "@/model/game";
import { PlayerSummary } from "@/model/player";
import { getOwnedGames, getPlayerSummary } from "@/lib/steamapi";
import { GetServerSideProps } from "next/types";

type Props = {
  summary: PlayerSummary | null;
  games: PlayedGameData[];
};

export default function Get(props: Props) {
  const title = "Most Played Games";

  if (props.summary === null) {
    return <>Incorrect SteamID.</>;
  }

  return (
    <>
      <Card title={title} player={props.summary} games={props.games} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id =
    context.query["id"] === undefined ? "" : context.query["id"].toString();

  const summary = await getPlayerSummary(id);

  const games = (await getOwnedGames(id))
    .sort((a, b) => b.playtime_forever - a.playtime_forever)
    .slice(0, 8);

  const props: Props = {
    summary: summary,
    games: games,
  };

  return { props: props };
};
