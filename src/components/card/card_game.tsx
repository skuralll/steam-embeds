import Image from "next/image";
import styles from "@/styles/card_game.module.css";
import { PlayedGameData } from "@/model/game";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { getGameHeaderURL, getGameSearchHeaderURL } from "@/lib/api";

// カードのヘッダ
export default function CardGame({ game }: { game: PlayedGameData }) {
  // const lastPlay = new Date(game.rtime_last_played * 1000).toLocaleDateString();
  const lastPlay = "28 Aug, 2020";

  return (
    <div className={styles.game_item}>
      <div className={styles.game_icon}>
        <Image
          src={getGameSearchHeaderURL(game.appid)}
          alt=""
          width={120}
          height={45.2}
        />
      </div>
      <div className={styles.info_stack}>
        <div className={styles.info_first}>
          <span className={styles.game_title}>{game.name}</span>
        </div>
        <div className={styles.info_second}>
          <br></br>
        </div>
        <div className={styles.info_third}>
          <span className={styles.last_play}>{lastPlay}</span>
          <span className={styles.play_time}>
            {game.playtime_forever + " hours"}
          </span>
        </div>
      </div>
    </div>
  );
}
