import Image from "next/image";
import styles from "@/styles/card_game.module.css";
import { Game } from "@/model/game";

// カードのヘッダ
export default function CardGame({ game }: { game: Game }) {
  return (
    <div className={styles.game_item}>
      <div>
        <h2 className={styles.game_title}>{game.name}</h2>
        <span className={styles.game_playtime}>{game.playtime + "hours"}</span>
      </div>
    </div>
  );
}
