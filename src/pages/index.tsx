import styles from "@/styles/index.module.css";
import Head from "next/head";
import Card from "@/components/card/card";
import { PlayedGameData } from "@/model/game";
import { PlayerSummary } from "@/model/player";
import { getOwnedGames, getPlayerSummary } from "@/lib/steamapi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { excode } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>SteamEmbeds</title>
        <meta
          name="description"
          content="Generate embed code for the list of Steam games played"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.page}>
        <div className={styles.section}>
          <h1>これは何？</h1>
          <div className={styles.content}>
            <span>
              Steamでプレイしたゲームを表示する埋め込みコードを生成できます。
            </span>
          </div>
        </div>
        <div className={styles.section}>
          <h1>使用例</h1>
          <div className={styles.content}>
            <div className={styles.iframe}>
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="489"
                frameBorder="0"
                src="http://localhost:3000/get?id=76561198424303465"
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h1>埋め込みコード生成</h1>
          <div className={styles.content}>{/* todo */}</div>
        </div>
      </div>
    </>
  );
}

{
  /* <SyntaxHighlighter
  language="html"
  style={atelierForestLight}
  className={styles.excode}
>
  {excode}
</SyntaxHighlighter>;  */
}
