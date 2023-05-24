import styles from "@/styles/card.module.css";
import Image from "next/image";
import CardHeader from "./card_header";
import { Game } from "@/model/game";
import CardContents from "./card_contents";

export default function Card({
  title,
  username,
  games,
}: {
  title: string;
  username: string;
  games: Game[];
}) {
  return (
    <div className={styles.card}>
      <CardHeader title={title} username={username} />
      <CardContents games={games} />
    </div>
  );
}
