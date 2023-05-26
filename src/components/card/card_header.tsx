import Image from "next/image";
import styles from "@/styles/card_header.module.css";
import { PlayerSummary } from "@/model/player";

// カードのヘッダ
export default function CardHeader({
  title,
  player,
}: {
  title: string;
  player: PlayerSummary;
}) {
  return (
    <div className={styles.header}>
      <Image
        src={player.avatarfull}
        alt=""
        width={100}
        height={100}
        className={styles.user_icon}
      />
      <div className={styles.card_info}>
        <h1 className={styles.card_title}>{title}</h1>
        <span className={styles.user_name}>{player.personaname}</span>
      </div>
    </div>
  );
}
