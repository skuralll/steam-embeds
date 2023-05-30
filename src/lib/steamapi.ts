import { PlayedGameData } from "@/model/game";
import { PlayerSummary } from "@/model/player";

export async function getPlayerSummary(
  steamid: string
): Promise<PlayerSummary | null> {
  try {
    const data = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_TOKEN}&steamids=${steamid}`
    );
    const json = await data.json();
    // レスポンス検証
    if (json.response["players"].length === 0) {
      console.log(
        "❗️Error on fetching player summary. SteamID may be incorrect"
      );
      return null;
    }
    // うまく取得できていれば返す
    return json.response.players[0] as PlayerSummary;
  } catch (e) {
    console.log("❗️Error on fetching player summary");
    console.error(e);
    return null;
  }
}

export async function getOwnedGames(
  steamid: string
): Promise<PlayedGameData[]> {
  try {
    const data = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_TOKEN}&steamid=${steamid}&format=json&include_appinfo=1&include_played_free_games=1`
    );
    const json = await data.json();
    return json.response.games as PlayedGameData[];
  } catch (e) {
    console.log("❗️Error on fetching owned games");
    console.error(e);
    return [];
  }
}

export function getGameHeaderURL(appid: string): string {
  return `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`;
}

export function getGameSearchHeaderURL(appid: string): string {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/capsule_231x87.jpg`;
}
