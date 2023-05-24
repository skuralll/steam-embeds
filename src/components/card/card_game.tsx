import Image from "next/image";
import styles from "@/styles/card_game.module.css";
import { Game } from "@/model/game";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

// カードのヘッダ
export default function CardGame({ game }: { game: Game }) {
  return (
    <div className={styles.game_item}>
      <div>
        <div className={styles.game_title}>
          <h2>{game.name}</h2>
        </div>
        <div className={styles.game_detail}>
          <div className={styles.game_playtime}>
            <h3>TOTAL PLAYED:</h3>
            <span>{game.playtime + " hours"}</span>
          </div>
          <div className={styles.game_playtime}>
            <h3>LAST PLAYED:</h3>
            <span>{game.lastplay}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
