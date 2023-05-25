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
