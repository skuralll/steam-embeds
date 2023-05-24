import styles from "@/styles/card.module.css";
import Image from "next/image";
import CardHeader from "./card_header";
import { Game } from "@/model/game";
import CardContents from "./card_contents";

export default function Card() {
  const title = "Most Played Games";
  const username = "skuralll";
  const games: Game[] = [
    {
      name: "Counter-Strike: Global Offensive",
      playtime: 1290,
      lastplay: "2017-04-23",
      header: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      name: "Dota 2",
      playtime: 310.2,
      lastplay: "2021-08-01",
      header: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    },
    {
      name: "Grand Theft Auto V",
      playtime: 80,
      lastplay: "2022-06-11",
      header: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    },
    {
      name: "Rust",
      playtime: 5,
      lastplay: "2023-01-01",
      header: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
    },
  ];

  return (
    <div className={styles.card}>
      <CardHeader title={title} username={username} />
      <CardContents games={games} />
    </div>
  );
}
