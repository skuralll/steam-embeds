import styles from "@/styles/card.module.css";
import Image from "next/image";
import CardHeader from "./card_header";
import { PlayedGameData } from "@/model/game";
import CardContents from "./card_contents";
import { PlayerSummary } from "@/model/player";

export default function Card({
  title,
  player,
  games,
}: {
  title: string;
  player: PlayerSummary;
  games: PlayedGameData[];
}) {
  return (
    <div className={styles.card}>
      {/* <CardHeader title={title} player={player} /> */}
      <CardContents games={games} />
    </div>
  );
}
