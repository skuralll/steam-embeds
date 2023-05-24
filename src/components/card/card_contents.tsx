import Image from "next/image";
import styles from "@/styles/card_contents.module.css";
import { Game } from "@/model/game";

// カードのヘッダ
export default function CardContents({ games }: { games: Game[] }) {
  return (
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
  );
}
