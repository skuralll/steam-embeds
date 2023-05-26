import Image from "next/image";
import styles from "@/styles/card_header.module.css";
import { PlayerSummary } from "@/model/player";
import SteamLogo from "../../../public/steamlogo.svg";
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
      <SteamLogo
        viewBox="0 0 295.457 90.473"
        width={100}
        height={30}
        className={styles.user_icon}
        color="red"
      />
      <div className={styles.card_info}>
        <span className={styles.card_title}>{title}</span>
      </div>
    </div>
  );
}
