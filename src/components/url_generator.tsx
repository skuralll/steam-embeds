import styles from "@/styles/urlgen.module.css";
import { useState } from "react";
import NumberInput from "./utils/number_input";
import { getEmbedsCode } from "@/lib/utils";

export default function URLGenerator() {
  // 各Input
  const [steamID, setSteamID] = useState("");
  const [gameNum, setGameNum] = useState("8");
  const [width, setWidth] = useState("390");
  // 生成したURL
  const [url, setURL] = useState(getEmbedsCode(steamID, gameNum, width));
  // ボタン
  const onGenClick = () => {
    setURL(getEmbedsCode(steamID, gameNum, width));
  };

  return (
    <div className={styles.urlgen}>
      {/* id */}
      <div className={styles.section}>
        <div className={styles.steamid}>
          <span className={styles.legend}>Steam ID</span>
          <a href="https://www.ubisoft.com/ja-jp/help/article/finding-your-steam-id/000060565">
            {"("}
            <span className={styles.idlink}>SteamIDの取得方法</span>
            {")"}
          </a>
        </div>
        <NumberInput
          value={steamID}
          setValue={setSteamID}
          placeholder="Steam ID"
        />
      </div>
      {/* ゲーム数 */}
      <div className={styles.section}>
        <span className={styles.legend}>表示するゲーム数</span>
        <NumberInput
          value={gameNum}
          setValue={setGameNum}
          placeholder="ゲーム数"
        />
      </div>
      {/* 横幅 */}
      <div className={styles.section}>
        <span className={styles.legend}>横幅 (300以上推奨)</span>
        <NumberInput value={width} setValue={setWidth} placeholder="横幅" />
      </div>
      {/* 生成ボタン */}
      <div className={styles.section}>
        <button className={styles.genbtn} onClick={onGenClick}>
          生成
        </button>
      </div>
      {/* 結果 */}
      <div className={styles.section}>
        <span className={styles.legend}>
          埋め込みコード
          (Next.jsではscriptではなくnext/scriptを使用してください)
        </span>
        <span className={styles.url}>{url}</span>
      </div>
    </div>
  );
}
