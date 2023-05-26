import Image from "next/image";
import styles from "@/styles/card_game.module.css";
import { PlayedGameData } from "@/model/game";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

// カードのヘッダ
export default function CardGame({ game }: { game: PlayedGameData }) {
  // const lastPlay = new Date(game.rtime_last_played * 1000).toLocaleDateString();
  // const lastPlay = "2021/01/01";

  return (
    <div className={styles.game_item}>
      <div>
        <div className={styles.game_title}>
          <h2>{game.name}</h2>
        </div>
        <div className={styles.game_detail}>
          <div className={styles.game_playtime}>
            {/* <h3>TOTAL PLAYED:</h3> */}
            <span>{game.playtime_forever + " hours"}</span>
          </div>
          {/* <div className={styles.game_playtime}>
            <h3>LAST PLAYED:</h3>
            <span>{lastPlay}</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
