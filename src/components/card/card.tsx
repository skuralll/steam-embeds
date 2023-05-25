import styles from "@/styles/card.module.css";
import Image from "next/image";
import CardHeader from "./card_header";
import { PlayedGameData } from "@/model/game";
import CardContents from "./card_contents";

export default function Card({
  title,
  username,
  avatar,
  games,
}: {
  title: string;
  username: string;
  avatar: string;
  games: PlayedGameData[];
}) {
  return (
    <div className={styles.card}>
      <CardHeader title={title} username={username} avatar={avatar} />
      <CardContents games={games} />
    </div>
  );
}
