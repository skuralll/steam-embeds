import Image from "next/image";
import styles from "@/styles/card_contents.module.css";
import { PlayedGameData } from "@/model/game";
import CardGame from "./card_game";

// カードのヘッダ
export default function CardContents({ games }: { games: PlayedGameData[] }) {
  return (
    <div className={styles.content}>
      <ol className={styles.game_list}>
        {games.map((game) => (
          <li key={game.name}>
            <CardGame game={game} />
          </li>
        ))}
      </ol>
    </div>
  );
}
