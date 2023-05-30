import styles from "@/styles/get.module.css";
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
  return (
    <>
      <Head>
        <title>SteamEmbeds</title>
        <meta
          name="description"
          content="Generate embed code for the list of Steam games played"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.contents}>
        <h1>これは何？</h1>
        <span>
          あなたがSteamでプレイしたゲーム表示する埋め込みコードを取得できます。
          <br />
        </span>
      </div>
    </>
  );
}
