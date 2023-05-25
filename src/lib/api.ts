import { PlayedGameData } from "@/model/game";
import { PlayerSummary } from "@/model/player";

export async function getPlayerSummary(
  steamid: string
): Promise<PlayerSummary | undefined> {
  try {
    const data = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_TOKEN}&steamids=${steamid}`
    );
    const json = await data.json();
    return json.response.players[0] as PlayerSummary;
  } catch (e) {
    console.log("❗️Error on fetching player summary");
    console.error(e);
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