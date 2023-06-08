import styles from "@/styles/card.module.css";
import Image from "next/image";
import CardHeader from "./card_header";
import { PlayedGameData } from "@/model/game";
import CardContents from "./card_contents";
import { PlayerSummary } from "@/model/player";
import { useLayoutEffect, useRef } from "react";
import { IDENT } from "@/lib/constants";

export default function Card({
  title,
  player,
  games,
}: {
  title: string;
  player: PlayerSummary;
  games: PlayedGameData[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  // iframeの高さ変更用
  useLayoutEffect(() => {
    // 有効性確認
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (!window.parent) return;
    // サイズ更新関数
    const sendEmbedSizeInfo = () => {
      window.parent.postMessage(
        JSON.stringify({
          width: rect.width,
          height: rect.height,
          ident: IDENT,
        }),
        "*"
      );
    };
    //情報送信
    sendEmbedSizeInfo();
    // イベントリスナー登録
    window.addEventListener("resize", sendEmbedSizeInfo);
    return () => window.removeEventListener("resize", sendEmbedSizeInfo);
  }, []);

  return (
    <div className={styles.card} ref={ref}>
      <CardHeader title={title} player={player} />
      <CardContents games={games} />
    </div>
  );
}
