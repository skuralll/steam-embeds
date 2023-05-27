import Image from "next/image";
import styles from "@/styles/card_game.module.css";
import { PlayedGameData } from "@/model/game";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { getGameHeaderURL, getGameSearchHeaderURL } from "@/lib/steamapi";
import { getDateString } from "@/lib/utils";
import Link from "next/link";

// カードのヘッダ
export default function CardGame({ game }: { game: PlayedGameData }) {
  const lastPlay =
    game.rtime_last_played == 0 ? "" : getDateString(game.rtime_last_played);

  return (
    <a
      href={`https://store.steampowered.com/app/${game.appid}/`}
      className={styles.link}
    >
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
              {Math.ceil((game.playtime_forever / 60) * 10) / 10 + " hours"}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
