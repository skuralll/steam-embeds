import styles from "@/styles/card.module.css";
import Image from "next/image";
import CardHeader from "./card_header";

type Game = {
  name: string;
  playtime: number;
  header: string;
};

export default function Card() {
  const title = "Most Played Games";
  const username = "skuralll";
  const games: Game[] = [
    {
      name: "Counter-Strike: Global Offensive",
      playtime: 1290,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      name: "Dota 2",
      playtime: 310.2,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    },
    {
      name: "Grand Theft Auto V",
      playtime: 80,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    },
    {
      name: "Rust",
      playtime: 5,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
    },
  ];

  return (
    <div className={styles.card}>
      <CardHeader title={title} username={username} />
      <div className={styles.content}>
        <ol className={styles.game_list}>
          {games.map((game) => (
            <li key={game.name}>
              <div className={styles.game_item}>
                <div>
                  <h2 className={styles.game_title}>{game.name}</h2>
                  <span className={styles.game_playtime}>
                    {game.playtime + "hours"}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
